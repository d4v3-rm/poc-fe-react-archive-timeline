import type { AppLocale } from "../i18n";
import type { PoemGroup, PoeticBranch, PoeticMood } from "../types";

export interface PoemContentConfig {
  id: string;
  title: string;
  author: string;
  group: PoemGroup;
  markdown: string;
}

export interface PoeticEventContentConfig {
  id: string;
  year: number;
  title: string;
  location: string;
  mood: PoeticMood;
  branch: PoeticBranch;
  branchFrom?: string;
  description: string;
  connections: string[];
  poems: PoemContentConfig[];
}

const allowedMoods: PoeticMood[] = [
  "love",
  "nature",
  "revolt",
  "exile",
  "spiritual",
];

const allowedBranches: PoeticBranch[] = [
  "canonical",
  "vision",
  "civic",
  "performative",
];

const allowedPoemGroups: PoemGroup[] = ["cycle", "fragments", "manifesto"];

const moodSet = new Set<PoeticMood>(allowedMoods);
const branchSet = new Set<PoeticBranch>(allowedBranches);
const poemGroupSet = new Set<PoemGroup>(allowedPoemGroups);

type ValidationErrors = string[];

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

const parseNonEmptyString = (
  value: unknown,
  path: string,
  errors: ValidationErrors,
): string | null => {
  if (typeof value !== "string") {
    errors.push(`${path} must be a string.`);
    return null;
  }

  const normalized = value.trim();
  if (normalized.length === 0) {
    errors.push(`${path} must be a non-empty string.`);
    return null;
  }

  return normalized;
};

const parsePositiveInteger = (
  value: unknown,
  path: string,
  errors: ValidationErrors,
): number | null => {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    errors.push(`${path} must be a finite number.`);
    return null;
  }

  if (!Number.isInteger(value) || value <= 0) {
    errors.push(`${path} must be a positive integer.`);
    return null;
  }

  return value;
};

const parsePoeticMood = (
  value: unknown,
  path: string,
  errors: ValidationErrors,
): PoeticMood | null => {
  if (typeof value !== "string" || !moodSet.has(value as PoeticMood)) {
    errors.push(`${path} must be one of: ${allowedMoods.join(", ")}.`);
    return null;
  }

  return value as PoeticMood;
};

const parsePoeticBranch = (
  value: unknown,
  path: string,
  errors: ValidationErrors,
): PoeticBranch | null => {
  if (typeof value !== "string" || !branchSet.has(value as PoeticBranch)) {
    errors.push(`${path} must be one of: ${allowedBranches.join(", ")}.`);
    return null;
  }

  return value as PoeticBranch;
};

const parsePoemGroup = (
  value: unknown,
  path: string,
  errors: ValidationErrors,
): PoemGroup | null => {
  if (typeof value !== "string" || !poemGroupSet.has(value as PoemGroup)) {
    errors.push(`${path} must be one of: ${allowedPoemGroups.join(", ")}.`);
    return null;
  }

  return value as PoemGroup;
};

const parseStringArray = (
  value: unknown,
  path: string,
  errors: ValidationErrors,
): string[] | null => {
  if (!Array.isArray(value)) {
    errors.push(`${path} must be an array of strings.`);
    return null;
  }

  const result: string[] = [];
  value.forEach((item, index) => {
    const parsed = parseNonEmptyString(item, `${path}[${index}]`, errors);
    if (parsed !== null) {
      result.push(parsed);
    }
  });

  return result;
};

const normalizeMarkdownPath = (value: string): string => {
  return value.replace(/\\/g, "/").replace(/^\/+/, "");
};

export const toMarkdownFileKey = (
  locale: AppLocale,
  markdownPath: string,
): string => {
  return `../content/locales/${locale}/poems/${normalizeMarkdownPath(markdownPath)}`;
};

const parsePoemContent = (
  locale: AppLocale,
  eventId: string,
  index: number,
  candidate: unknown,
  markdownFiles: Record<string, string>,
  errors: ValidationErrors,
): PoemContentConfig | null => {
  const path = `events["${eventId}"].poems[${index}]`;

  if (!isRecord(candidate)) {
    errors.push(`${path} must be an object.`);
    return null;
  }

  const id = parseNonEmptyString(candidate.id, `${path}.id`, errors);
  const title = parseNonEmptyString(candidate.title, `${path}.title`, errors);
  const author = parseNonEmptyString(
    candidate.author,
    `${path}.author`,
    errors,
  );
  const group = parsePoemGroup(candidate.group, `${path}.group`, errors);
  const markdownPath = parseNonEmptyString(
    candidate.markdown,
    `${path}.markdown`,
    errors,
  );

  if (
    id === null ||
    title === null ||
    author === null ||
    group === null ||
    markdownPath === null
  ) {
    return null;
  }

  if (!markdownPath.endsWith(".md")) {
    errors.push(`${path}.markdown must end with ".md".`);
  }

  if (markdownPath.includes("..")) {
    errors.push(`${path}.markdown cannot contain path traversal segments.`);
  }

  const markdownKey = toMarkdownFileKey(locale, markdownPath);
  const markdownSource = markdownFiles[markdownKey];

  if (typeof markdownSource !== "string") {
    errors.push(
      `${path}.markdown points to a missing file: "${markdownPath}" (locale "${locale}").`,
    );
  } else if (markdownSource.trim().length === 0) {
    errors.push(
      `${path}.markdown points to an empty file: "${markdownPath}" (locale "${locale}").`,
    );
  }

  return {
    id,
    title,
    author,
    group,
    markdown: markdownPath,
  };
};

const parseEventContent = (
  locale: AppLocale,
  index: number,
  candidate: unknown,
  markdownFiles: Record<string, string>,
  errors: ValidationErrors,
): PoeticEventContentConfig | null => {
  const path = `events[${index}]`;

  if (!isRecord(candidate)) {
    errors.push(`${path} must be an object.`);
    return null;
  }

  const id = parseNonEmptyString(candidate.id, `${path}.id`, errors);
  const year = parsePositiveInteger(candidate.year, `${path}.year`, errors);
  const title = parseNonEmptyString(candidate.title, `${path}.title`, errors);
  const location = parseNonEmptyString(
    candidate.location,
    `${path}.location`,
    errors,
  );
  const mood = parsePoeticMood(candidate.mood, `${path}.mood`, errors);
  const branch = parsePoeticBranch(candidate.branch, `${path}.branch`, errors);
  const description = parseNonEmptyString(
    candidate.description,
    `${path}.description`,
    errors,
  );
  const connections = parseStringArray(
    candidate.connections,
    `${path}.connections`,
    errors,
  );

  let branchFrom: string | undefined;
  if (candidate.branchFrom !== undefined) {
    const parsedBranchFrom = parseNonEmptyString(
      candidate.branchFrom,
      `${path}.branchFrom`,
      errors,
    );
    if (parsedBranchFrom !== null) {
      branchFrom = parsedBranchFrom;
    }
  }

  if (
    id === null ||
    year === null ||
    title === null ||
    location === null ||
    mood === null ||
    branch === null ||
    description === null ||
    connections === null
  ) {
    return null;
  }

  if (!Array.isArray(candidate.poems)) {
    errors.push(`${path}.poems must be an array.`);
    return null;
  }

  if (candidate.poems.length === 0) {
    errors.push(`${path}.poems must contain at least one poem.`);
  }

  const poemIds = new Set<string>();
  const poems: PoemContentConfig[] = [];

  candidate.poems.forEach((poemCandidate, poemIndex) => {
    const poem = parsePoemContent(
      locale,
      id,
      poemIndex,
      poemCandidate,
      markdownFiles,
      errors,
    );
    if (!poem) {
      return;
    }

    if (poemIds.has(poem.id)) {
      errors.push(
        `events["${id}"].poems contains duplicate poem id "${poem.id}".`,
      );
      return;
    }

    poemIds.add(poem.id);
    poems.push(poem);
  });

  if (poems.length === 0) {
    errors.push(`${path}.poems does not contain any valid poem definition.`);
  }

  return {
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
  };
};

const formatValidationMessage = (locale: AppLocale, errors: string[]) => {
  const issueCount = errors.length;
  const header = `[poetic-events] Validation failed for locale "${locale}" (${issueCount} issue${issueCount === 1 ? "" : "s"}).`;
  const details = errors.map((issue) => ` - ${issue}`).join("\n");
  return `${header}\n${details}`;
};

export const validatePoeticEventsContent = (
  locale: AppLocale,
  candidate: unknown,
  markdownFiles: Record<string, string>,
): PoeticEventContentConfig[] => {
  const errors: string[] = [];

  if (!Array.isArray(candidate)) {
    throw new Error(
      `[poetic-events] Invalid root schema for locale "${locale}". Expected an array of events.`,
    );
  }

  const eventIds = new Set<string>();
  const events: PoeticEventContentConfig[] = [];

  candidate.forEach((eventCandidate, eventIndex) => {
    const parsedEvent = parseEventContent(
      locale,
      eventIndex,
      eventCandidate,
      markdownFiles,
      errors,
    );
    if (!parsedEvent) {
      return;
    }

    if (eventIds.has(parsedEvent.id)) {
      errors.push(`Duplicate event id "${parsedEvent.id}".`);
      return;
    }

    eventIds.add(parsedEvent.id);
    events.push(parsedEvent);
  });

  events.forEach((event) => {
    if (event.branchFrom && !eventIds.has(event.branchFrom)) {
      errors.push(
        `events["${event.id}"].branchFrom references missing event "${event.branchFrom}".`,
      );
    }

    const seenConnections = new Set<string>();
    event.connections.forEach((connectionId) => {
      if (connectionId === event.id) {
        errors.push(
          `events["${event.id}"].connections cannot include the same event id.`,
        );
      }

      if (seenConnections.has(connectionId)) {
        errors.push(
          `events["${event.id}"].connections contains duplicate id "${connectionId}".`,
        );
      } else {
        seenConnections.add(connectionId);
      }

      if (!eventIds.has(connectionId)) {
        errors.push(
          `events["${event.id}"].connections references missing event "${connectionId}".`,
        );
      }
    });
  });

  if (errors.length > 0) {
    throw new Error(formatValidationMessage(locale, errors));
  }

  return events;
};
