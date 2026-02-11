export type PoeticMood = "love" | "nature" | "revolt" | "exile" | "spiritual";

export type PoeticBranch = "canonical" | "vision" | "civic" | "performative";

export type PoemGroup = "cycle" | "fragments" | "manifesto";

export interface PoemEntry {
  id: string;
  title: string;
  author: string;
  excerpt: string;
  group: PoemGroup;
}

export interface PoeticEvent {
  id: string;
  year: number;
  title: string;
  location: string;
  mood: PoeticMood;
  branch: PoeticBranch;
  branchFrom?: string;
  description: string;
  connections: string[];
  poems: PoemEntry[];
}

export interface StartupLoaderConfig {
  enabled: boolean;
  delayMs: number;
}
