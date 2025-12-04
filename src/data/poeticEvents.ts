import rawPoeticEvents from '../content/poetic-events.json'
import type {
  PoemEntry,
  PoemGroup,
  PoeticBranch,
  PoeticEvent,
  PoeticMood,
} from '../types'

interface PoemContentConfig {
  id: string
  title: string
  author: string
  group: PoemGroup
  markdown: string
}

interface PoeticEventContentConfig {
  id: string
  year: number
  title: string
  location: string
  mood: PoeticMood
  branch: PoeticBranch
  branchFrom?: string
  description: string
  connections: string[]
  poems: PoemContentConfig[]
}

const markdownFiles = import.meta.glob<string>('../content/poems/**/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
})

const resolvePoemBody = (markdownPath: string, poemId: string) => {
  const normalizedPath = markdownPath.replace(/\\/g, '/').replace(/^\/+/, '')
  const source = markdownFiles[`../content/poems/${normalizedPath}`]

  if (!source) {
    console.warn(
      `[poetic-events] Missing markdown for poem "${poemId}" at path "${markdownPath}".`,
    )
    return 'Contenuto non disponibile.'
  }

  const trimmedSource = source.trim()
  return trimmedSource.length > 0 ? trimmedSource : 'Contenuto non disponibile.'
}

const toPoemEntry = (poem: PoemContentConfig): PoemEntry => ({
  id: poem.id,
  title: poem.title,
  author: poem.author,
  group: poem.group,
  excerpt: resolvePoemBody(poem.markdown, poem.id),
})

const toPoeticEvent = (event: PoeticEventContentConfig): PoeticEvent => ({
  id: event.id,
  year: event.year,
  title: event.title,
  location: event.location,
  mood: event.mood,
  branch: event.branch,
  branchFrom: event.branchFrom,
  description: event.description,
  connections: [...event.connections],
  poems: event.poems.map(toPoemEntry),
})

export const poeticEvents: PoeticEvent[] = (
  rawPoeticEvents as PoeticEventContentConfig[]
).map(toPoeticEvent)
