import type { PoemGroup, PoeticBranch, PoeticMood } from '../../types'
import { messages } from '../../i18n'

export type MoodFilter = 'tutti' | PoeticMood

export const moodOptions: Array<{ id: MoodFilter; label: string }> = [
  { id: 'tutti', label: messages.filters.all },
  { id: 'amore', label: messages.filters.moods.amore },
  { id: 'natura', label: messages.filters.moods.natura },
  { id: 'rivolta', label: messages.filters.moods.rivolta },
  { id: 'esilio', label: messages.filters.moods.esilio },
  { id: 'spirituale', label: messages.filters.moods.spirituale },
]

export const moodLabels: Record<PoeticMood, string> = {
  amore: messages.filters.moods.amore,
  natura: messages.filters.moods.natura,
  rivolta: messages.filters.moods.rivolta,
  esilio: messages.filters.moods.esilio,
  spirituale: messages.filters.moods.spirituale,
}

export const branchLabels: Record<PoeticBranch, string> = {
  radice: messages.timeline.branchLabels.radice,
  visione: messages.timeline.branchLabels.visione,
  civile: messages.timeline.branchLabels.civile,
  performativa: messages.timeline.branchLabels.performativa,
}

export const poemGroupOrder: PoemGroup[] = ['manifesto', 'ciclo', 'frammenti']

export const poemGroupLabels: Record<PoemGroup, string> = {
  manifesto: messages.poems.groups.manifesto,
  ciclo: messages.poems.groups.ciclo,
  frammenti: messages.poems.groups.frammenti,
}
