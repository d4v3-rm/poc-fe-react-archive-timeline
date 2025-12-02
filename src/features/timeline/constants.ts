import type { PoemGroup, PoeticBranch, PoeticMood } from '../../types'

export type MoodFilter = 'tutti' | PoeticMood

export const moodOptions: Array<{ id: MoodFilter; label: string }> = [
  { id: 'tutti', label: 'Tutti i mood' },
  { id: 'amore', label: 'Amore' },
  { id: 'natura', label: 'Natura' },
  { id: 'rivolta', label: 'Rivolta' },
  { id: 'esilio', label: 'Esilio' },
  { id: 'spirituale', label: 'Spirituale' },
]

export const moodLabels: Record<PoeticMood, string> = {
  amore: 'Amore',
  natura: 'Natura',
  rivolta: 'Rivolta',
  esilio: 'Esilio',
  spirituale: 'Spirituale',
}

export const branchLabels: Record<PoeticBranch, string> = {
  radice: 'Radice canonica',
  visione: 'Ramo visione',
  civile: 'Ramo civile',
  performativa: 'Ramo performativo',
}

export const poemGroupOrder: PoemGroup[] = ['manifesto', 'ciclo', 'frammenti']

export const poemGroupLabels: Record<PoemGroup, string> = {
  manifesto: 'Manifesti',
  ciclo: 'Cicli',
  frammenti: 'Frammenti',
}
