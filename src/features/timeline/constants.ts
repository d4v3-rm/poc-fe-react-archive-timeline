import { getMessages, type AppLocale } from "../../i18n";
import type { PoemGroup, PoeticBranch, PoeticMood } from "../../types";

export type MoodFilter = "all" | PoeticMood;

export const moodFilterOrder: MoodFilter[] = [
  "all",
  "love",
  "nature",
  "revolt",
  "exile",
  "spiritual",
];

export const poemGroupOrder: PoemGroup[] = ["manifesto", "cycle", "fragments"];

export const getMoodOptions = (locale: AppLocale) => {
  const messages = getMessages(locale);

  return moodFilterOrder.map((id) => ({
    id,
    label: id === "all" ? messages.filters.all : messages.filters.moods[id],
  }));
};

export const getMoodLabels = (locale: AppLocale): Record<PoeticMood, string> => {
  const messages = getMessages(locale);

  return {
    love: messages.filters.moods.love,
    nature: messages.filters.moods.nature,
    revolt: messages.filters.moods.revolt,
    exile: messages.filters.moods.exile,
    spiritual: messages.filters.moods.spiritual,
  };
};

export const getBranchLabels = (
  locale: AppLocale,
): Record<PoeticBranch, string> => {
  const messages = getMessages(locale);

  return {
    canonical: messages.timeline.branchLabels.canonical,
    vision: messages.timeline.branchLabels.vision,
    civic: messages.timeline.branchLabels.civic,
    performative: messages.timeline.branchLabels.performative,
  };
};

export const getPoemGroupLabels = (
  locale: AppLocale,
): Record<PoemGroup, string> => {
  const messages = getMessages(locale);

  return {
    manifesto: messages.poems.groups.manifesto,
    cycle: messages.poems.groups.cycle,
    fragments: messages.poems.groups.fragments,
  };
};
