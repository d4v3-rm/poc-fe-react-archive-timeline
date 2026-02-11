import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const projectRoot = process.cwd();
const localesRoot = path.join(projectRoot, "src", "content", "locales");

const allowedMoods = new Set(["love", "nature", "revolt", "exile", "spiritual"]);
const allowedBranches = new Set([
  "canonical",
  "vision",
  "civic",
  "performative",
]);
const allowedGroups = new Set(["manifesto", "cycle", "fragments"]);

const isRecord = (value) =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isNonEmptyString = (value) =>
  typeof value === "string" && value.trim().length > 0;

const normalizeMarkdownPath = (markdownPath) =>
  markdownPath.replace(/\\/g, "/").replace(/^\/+/, "");

const fail = (errors) => {
  console.error(
    `[content-check] Validation failed with ${errors.length} issue${
      errors.length === 1 ? "" : "s"
    }:`,
  );
  errors.forEach((error) => {
    console.error(` - ${error}`);
  });
  process.exit(1);
};

const validatePoem = async ({
  locale,
  eventId,
  poem,
  index,
  poemIds,
  errors,
}) => {
  const pathPrefix = `locales/${locale}/poetic-events.json -> events["${eventId}"].poems[${index}]`;

  if (!isRecord(poem)) {
    errors.push(`${pathPrefix} must be an object.`);
    return;
  }

  const { id, title, author, group, markdown } = poem;

  if (!isNonEmptyString(id)) {
    errors.push(`${pathPrefix}.id must be a non-empty string.`);
  } else if (poemIds.has(id)) {
    errors.push(`${pathPrefix}.id duplicates "${id}" in the same event.`);
  } else {
    poemIds.add(id);
  }

  if (!isNonEmptyString(title)) {
    errors.push(`${pathPrefix}.title must be a non-empty string.`);
  }

  if (!isNonEmptyString(author)) {
    errors.push(`${pathPrefix}.author must be a non-empty string.`);
  }

  if (!isNonEmptyString(group) || !allowedGroups.has(group)) {
    errors.push(
      `${pathPrefix}.group must be one of: ${Array.from(allowedGroups).join(
        ", ",
      )}.`,
    );
  }

  if (!isNonEmptyString(markdown)) {
    errors.push(`${pathPrefix}.markdown must be a non-empty string.`);
    return;
  }

  if (!markdown.endsWith(".md")) {
    errors.push(`${pathPrefix}.markdown must end with ".md".`);
  }

  if (markdown.includes("..")) {
    errors.push(`${pathPrefix}.markdown cannot contain path traversal segments.`);
    return;
  }

  const normalizedPath = normalizeMarkdownPath(markdown);
  const absolutePath = path.join(
    localesRoot,
    locale,
    "poems",
    normalizedPath.split("/").join(path.sep),
  );

  try {
    const markdownStat = await stat(absolutePath);
    if (!markdownStat.isFile()) {
      errors.push(
        `${pathPrefix}.markdown path does not point to a file: "${markdown}".`,
      );
      return;
    }
  } catch {
    errors.push(`${pathPrefix}.markdown file not found: "${markdown}".`);
    return;
  }

  const markdownBody = await readFile(absolutePath, "utf8");
  if (markdownBody.trim().length === 0) {
    errors.push(`${pathPrefix}.markdown file is empty: "${markdown}".`);
  }
};

const validateEvent = async ({
  locale,
  event,
  index,
  eventIds,
  connectionChecks,
  errors,
}) => {
  const pathPrefix = `locales/${locale}/poetic-events.json -> events[${index}]`;

  if (!isRecord(event)) {
    errors.push(`${pathPrefix} must be an object.`);
    return;
  }

  const {
    id,
    year,
    title,
    location,
    mood,
    branch,
    branchFrom,
    description,
    connections,
    poems,
  } = event;

  if (!isNonEmptyString(id)) {
    errors.push(`${pathPrefix}.id must be a non-empty string.`);
    return;
  }

  if (eventIds.has(id)) {
    errors.push(`${pathPrefix}.id duplicates "${id}".`);
    return;
  }

  eventIds.add(id);

  if (!(typeof year === "number" && Number.isInteger(year) && year > 0)) {
    errors.push(`${pathPrefix}.year must be a positive integer.`);
  }

  if (!isNonEmptyString(title)) {
    errors.push(`${pathPrefix}.title must be a non-empty string.`);
  }

  if (!isNonEmptyString(location)) {
    errors.push(`${pathPrefix}.location must be a non-empty string.`);
  }

  if (!isNonEmptyString(description)) {
    errors.push(`${pathPrefix}.description must be a non-empty string.`);
  }

  if (!isNonEmptyString(mood) || !allowedMoods.has(mood)) {
    errors.push(
      `${pathPrefix}.mood must be one of: ${Array.from(allowedMoods).join(
        ", ",
      )}.`,
    );
  }

  if (!isNonEmptyString(branch) || !allowedBranches.has(branch)) {
    errors.push(
      `${pathPrefix}.branch must be one of: ${Array.from(allowedBranches).join(
        ", ",
      )}.`,
    );
  }

  if (branchFrom !== undefined && !isNonEmptyString(branchFrom)) {
    errors.push(`${pathPrefix}.branchFrom must be a non-empty string if set.`);
  }

  if (!Array.isArray(connections)) {
    errors.push(`${pathPrefix}.connections must be an array.`);
  } else {
    const localConnections = new Set();
    connections.forEach((connectionId, connectionIndex) => {
      const connectionPath = `${pathPrefix}.connections[${connectionIndex}]`;
      if (!isNonEmptyString(connectionId)) {
        errors.push(`${connectionPath} must be a non-empty string.`);
        return;
      }

      if (connectionId === id) {
        errors.push(`${connectionPath} cannot reference the same event id.`);
      }

      if (localConnections.has(connectionId)) {
        errors.push(
          `${pathPrefix}.connections contains duplicate id "${connectionId}".`,
        );
      } else {
        localConnections.add(connectionId);
      }
    });

    connectionChecks.push({
      pathPrefix,
      id,
      branchFrom,
      connections: connections.filter(isNonEmptyString),
    });
  }

  if (!Array.isArray(poems)) {
    errors.push(`${pathPrefix}.poems must be an array.`);
    return;
  }

  if (poems.length === 0) {
    errors.push(`${pathPrefix}.poems must contain at least one poem.`);
  }

  const poemIds = new Set();
  await Promise.all(
    poems.map((poem, poemIndex) =>
      validatePoem({
        locale,
        eventId: id,
        poem,
        index: poemIndex,
        poemIds,
        errors,
      }),
    ),
  );
};

const validateLocaleContent = async (locale, errors) => {
  const eventsPath = path.join(localesRoot, locale, "poetic-events.json");
  const raw = await readFile(eventsPath, "utf8");
  const parsed = JSON.parse(raw);

  if (!Array.isArray(parsed)) {
    errors.push(
      `locales/${locale}/poetic-events.json root must be an array of events.`,
    );
    return;
  }

  const eventIds = new Set();
  const connectionChecks = [];

  for (let index = 0; index < parsed.length; index += 1) {
    await validateEvent({
      locale,
      event: parsed[index],
      index,
      eventIds,
      connectionChecks,
      errors,
    });
  }

  connectionChecks.forEach(({ pathPrefix, branchFrom, connections }) => {
    if (isNonEmptyString(branchFrom) && !eventIds.has(branchFrom)) {
      errors.push(
        `${pathPrefix}.branchFrom references missing event "${branchFrom}".`,
      );
    }

    connections.forEach((connectionId) => {
      if (!eventIds.has(connectionId)) {
        errors.push(
          `${pathPrefix}.connections references missing event "${connectionId}".`,
        );
      }
    });
  });
};

const run = async () => {
  const localeEntries = await readdir(localesRoot, { withFileTypes: true });
  const locales = localeEntries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  if (locales.length === 0) {
    fail(["No locale directories found under src/content/locales."]);
  }

  const errors = [];

  for (const locale of locales) {
    try {
      await validateLocaleContent(locale, errors);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : String(error ?? "Unknown error");
      errors.push(`locales/${locale}: ${message}`);
    }
  }

  if (errors.length > 0) {
    fail(errors);
  }

  console.log(`[content-check] OK (${locales.length} locale(s) validated).`);
};

await run();

