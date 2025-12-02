import { createSelector } from '@reduxjs/toolkit'
import { poeticEvents } from '../../data/poeticEvents'
import type { RootState } from '../../app/store'
import type { PoemEntry, PoemGroup, PoeticEvent } from '../../types'
import { poemGroupOrder } from './constants'

const toGroupedPoems = (poems: PoemEntry[]) => {
  const buckets = new Map<PoemGroup, PoemEntry[]>(
    poemGroupOrder.map((group) => [group, []]),
  )

  poems.forEach((poem) => {
    buckets.get(poem.group)?.push(poem)
  })

  return poemGroupOrder
    .map((group) => ({ group, poems: buckets.get(group) ?? [] }))
    .filter((entry) => entry.poems.length > 0)
}

const eventsById = new Map<string, PoeticEvent>(poeticEvents.map((event) => [event.id, event]))

const selectTimeline = (state: RootState) => state.timeline

export const selectMoodFilter = createSelector([selectTimeline], (timeline) => timeline.moodFilter)

const selectSelectedEventId = createSelector(
  [selectTimeline],
  (timeline) => timeline.selectedEventId,
)

const selectSelectedPoemId = createSelector(
  [selectTimeline],
  (timeline) => timeline.selectedPoemId,
)

const selectOpenPoemId = createSelector([selectTimeline], (timeline) => timeline.openPoemId)

const selectHoveredEventId = createSelector(
  [selectTimeline],
  (timeline) => timeline.hoveredEventId,
)

export const selectIsNodeModalOpen = createSelector(
  [selectTimeline],
  (timeline) => timeline.isNodeModalOpen,
)

export const selectFilteredEvents = createSelector([selectMoodFilter], (moodFilter) =>
  poeticEvents.filter((event) => (moodFilter === 'tutti' ? true : event.mood === moodFilter)),
)

export const selectHasNoFilteredEvents = createSelector(
  [selectFilteredEvents],
  (filteredEvents) => filteredEvents.length === 0,
)

export const selectEffectiveSelectedEventId = createSelector(
  [selectFilteredEvents, selectSelectedEventId],
  (filteredEvents, selectedEventId) => {
    if (filteredEvents.length === 0) {
      return null
    }

    if (selectedEventId && filteredEvents.some((event) => event.id === selectedEventId)) {
      return selectedEventId
    }

    return filteredEvents[0].id
  },
)

export const selectSelectedEvent = createSelector(
  [selectFilteredEvents, selectEffectiveSelectedEventId],
  (filteredEvents, effectiveSelectedEventId) =>
    filteredEvents.find((event) => event.id === effectiveSelectedEventId) ?? null,
)

export const selectHoveredEvent = createSelector([selectHoveredEventId], (hoveredEventId) => {
  if (!hoveredEventId) {
    return null
  }

  return eventsById.get(hoveredEventId) ?? null
})

export const selectEffectiveSelectedPoem = createSelector(
  [selectSelectedEvent, selectSelectedPoemId],
  (selectedEvent, selectedPoemId) => {
    if (!selectedEvent || selectedEvent.poems.length === 0) {
      return null
    }

    return selectedEvent.poems.find((poem) => poem.id === selectedPoemId) ?? selectedEvent.poems[0]
  },
)

export const selectOpenPoem = createSelector(
  [selectSelectedEvent, selectOpenPoemId],
  (selectedEvent, openPoemId) => {
    if (!selectedEvent || !openPoemId) {
      return null
    }

    return selectedEvent.poems.find((poem) => poem.id === openPoemId) ?? null
  },
)

export const selectGroupedPoems = createSelector([selectSelectedEvent], (selectedEvent) =>
  selectedEvent ? toGroupedPoems(selectedEvent.poems) : [],
)

export const selectRelatedEvents = createSelector([selectSelectedEvent], (selectedEvent) => {
  if (!selectedEvent) {
    return []
  }

  return selectedEvent.connections
    .map((id) => eventsById.get(id))
    .filter((event): event is PoeticEvent => Boolean(event))
})

export const selectStats = createSelector([selectFilteredEvents], (filteredEvents) => {
  const branches = new Set(filteredEvents.map((event) => event.branch)).size
  const poems = filteredEvents.reduce(
    (accumulator, event) => accumulator + event.poems.length,
    0,
  )

  return {
    nodes: filteredEvents.length,
    branches,
    poems,
  }
})

export const selectSelectedNodeIndex = createSelector(
  [selectFilteredEvents, selectEffectiveSelectedEventId],
  (filteredEvents, effectiveSelectedEventId) =>
    filteredEvents.findIndex((event) => event.id === effectiveSelectedEventId),
)
