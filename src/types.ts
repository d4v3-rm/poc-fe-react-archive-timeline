export type PoeticMood =
  | 'amore'
  | 'natura'
  | 'rivolta'
  | 'esilio'
  | 'spirituale'

export type PoeticBranch =
  | 'radice'
  | 'visione'
  | 'civile'
  | 'performativa'

export type PoemGroup = 'ciclo' | 'frammenti' | 'manifesto'

export interface PoemEntry {
  id: string
  title: string
  author: string
  excerpt: string
  group: PoemGroup
}

export interface PoeticEvent {
  id: string
  year: number
  title: string
  location: string
  mood: PoeticMood
  branch: PoeticBranch
  branchFrom?: string
  description: string
  connections: string[]
  poems: PoemEntry[]
}
