import { defaultLocale, supportedLocales, type AppLocale } from "../i18n";
import { recordRuntimeError } from "../observability/telemetry";
import type { PoemEntry, PoeticEvent } from "../types";
import {
  toMarkdownFileKey,
  type PoemContentConfig,
  type PoeticEventContentConfig,
  validatePoeticEventsContent,
} from "./poeticEvents.validation";

const rawEventFiles = import.meta.glob<unknown>(
  "../content/locales/*/poetic-events.json",
  { eager: true, import: "default" },
);

const markdownFiles = import.meta.glob<string>(
  "../content/locales/*/poems/**/*.md",
  {
    eager: true,
    import: "default",
    query: "?raw",
  },
);

const contentUnavailableByLocale: Record<AppLocale, string> = {
  en: "Content unavailable.",
  it: "Contenuto non disponibile.",
};

const emptyEventsByLocale: Record<AppLocale, PoeticEventContentConfig[]> = {
  en: [],
  it: [],
};

const localeErrors: Record<AppLocale, string | null> = {
  en: null,
  it: null,
};

const eventsByLocale = supportedLocales.reduce<
  Record<AppLocale, PoeticEventContentConfig[]>
>(
  (accumulator, locale) => {
    const fileEntry = Object.entries(rawEventFiles).find(([filePath]) =>
      filePath.includes(`/locales/${locale}/`),
    );

    try {
      accumulator[locale] = validatePoeticEventsContent(
        locale,
        fileEntry?.[1] ?? [],
        markdownFiles,
      );
    } catch (error) {
      const message =
        error instanceof Error ? error.message : String(error ?? "Unknown error");
      localeErrors[locale] = message;
      accumulator[locale] = [];
      console.error(message);
      recordRuntimeError(`content.validation.${locale}`, message);
    }

    return accumulator;
  },
  { ...emptyEventsByLocale },
);

const resolvePoemBody = (
  locale: AppLocale,
  markdownPath: string,
  poemId: string,
) => {
  const key = toMarkdownFileKey(locale, markdownPath);
  const source = markdownFiles[key];

  if (!source) {
    console.warn(
      `[poetic-events] Missing markdown for poem "${poemId}" in locale "${locale}" at path "${markdownPath}".`,
    );
    return contentUnavailableByLocale[locale];
  }

  const trimmedSource = source.trim();
  return trimmedSource.length > 0
    ? trimmedSource
    : contentUnavailableByLocale[locale];
};

const toPoemEntry = (
  locale: AppLocale,
  poem: PoemContentConfig,
): PoemEntry => ({
  id: poem.id,
  title: poem.title,
  author: poem.author,
  group: poem.group,
  excerpt: resolvePoemBody(locale, poem.markdown, poem.id),
});

const toPoeticEvent = (
  locale: AppLocale,
  event: PoeticEventContentConfig,
): PoeticEvent => ({
  id: event.id,
  year: event.year,
  title: event.title,
  location: event.location,
  mood: event.mood,
  branch: event.branch,
  branchFrom: event.branchFrom,
  description: event.description,
  connections: [...event.connections],
  poems: event.poems.map((poem) => toPoemEntry(locale, poem)),
});

const localizedEventsByLocale = supportedLocales.reduce<
  Record<AppLocale, PoeticEvent[]>
>(
  (accumulator, locale) => {
    accumulator[locale] = eventsByLocale[locale].map((event) =>
      toPoeticEvent(locale, event),
    );
    return accumulator;
  },
  {
    en: [],
    it: [],
  },
);

const getFirstAvailableLocale = (): AppLocale | null => {
  if (localizedEventsByLocale[defaultLocale].length > 0) {
    return defaultLocale;
  }

  const available = supportedLocales.find(
    (locale) => localizedEventsByLocale[locale].length > 0,
  );

  return available ?? null;
};

const getFallbackEvents = (): PoeticEvent[] => {
  const fallbackLocale = getFirstAvailableLocale();
  return fallbackLocale ? localizedEventsByLocale[fallbackLocale] : [];
};

export interface PoeticContentDiagnostics {
  hasFatalError: boolean;
  activeLocales: AppLocale[];
  fallbackLocale: AppLocale | null;
  localeErrors: Record<AppLocale, string | null>;
}

const activeLocales = supportedLocales.filter(
  (locale) => localizedEventsByLocale[locale].length > 0,
);

const fallbackLocale = getFirstAvailableLocale();

const contentDiagnostics: PoeticContentDiagnostics = {
  hasFatalError: activeLocales.length === 0,
  activeLocales,
  fallbackLocale,
  localeErrors,
};

export const getPoeticEvents = (locale: AppLocale): PoeticEvent[] => {
  const events = localizedEventsByLocale[locale];
  return events.length > 0 ? events : getFallbackEvents();
};

export const getDefaultEventId = () => {
  return getFallbackEvents()[0]?.id ?? null;
};

export const getPoeticContentDiagnostics = (): PoeticContentDiagnostics => {
  return {
    hasFatalError: contentDiagnostics.hasFatalError,
    activeLocales: [...contentDiagnostics.activeLocales],
    fallbackLocale: contentDiagnostics.fallbackLocale,
    localeErrors: { ...contentDiagnostics.localeErrors },
  };
};
