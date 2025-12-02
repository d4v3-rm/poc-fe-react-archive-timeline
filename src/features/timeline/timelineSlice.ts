import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { poeticEvents } from '../../data/poeticEvents'
import type { PoeticEvent } from '../../types'
import type { MoodFilter } from './constants'

interface TimelineState {
  moodFilter: MoodFilter
  selectedEventId: string | null
  selectedPoemId: string | null
  isNodeModalOpen: boolean
  openPoemId: string | null
  hoveredEventId: string | null
}

const eventsById = new Map<string, PoeticEvent>(poeticEvents.map((event) => [event.id, event]))

const resolveDefaultPoemId = (eventId: string | null) => {
  if (!eventId) {
    return null
  }

  return eventsById.get(eventId)?.poems[0]?.id ?? null
}

const initialEventId = poeticEvents[0]?.id ?? null

const initialState: TimelineState = {
  moodFilter: 'tutti',
  selectedEventId: initialEventId,
  selectedPoemId: resolveDefaultPoemId(initialEventId),
  isNodeModalOpen: false,
  openPoemId: null,
  hoveredEventId: null,
}

const applyEventSelection = (state: TimelineState, eventId: string) => {
  const event = eventsById.get(eventId)

  if (!event) {
    return
  }

  state.selectedEventId = event.id
  state.selectedPoemId = event.poems[0]?.id ?? null
  state.isNodeModalOpen = true
  state.openPoemId = null
  state.hoveredEventId = null
}

const timelineSlice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {
    setMoodFilter(state, action: PayloadAction<MoodFilter>) {
      state.moodFilter = action.payload
    },
    resetMoodFilter(state) {
      state.moodFilter = 'tutti'
    },
    selectEvent(state, action: PayloadAction<string>) {
      applyEventSelection(state, action.payload)
    },
    selectRelatedEvent(state, action: PayloadAction<string>) {
      state.moodFilter = 'tutti'
      applyEventSelection(state, action.payload)
    },
    setHoveredEventId(state, action: PayloadAction<string | null>) {
      state.hoveredEventId = action.payload
    },
    closeNodeModal(state) {
      state.isNodeModalOpen = false
      state.openPoemId = null
    },
    openPoemById(state, action: PayloadAction<string>) {
      state.selectedPoemId = action.payload
      state.openPoemId = action.payload
    },
    closePoem(state) {
      state.openPoemId = null
    },
  },
})

export const timelineReducer = timelineSlice.reducer
export const {
  setMoodFilter,
  resetMoodFilter,
  selectEvent,
  selectRelatedEvent,
  setHoveredEventId,
  closeNodeModal,
  openPoemById,
  closePoem,
} = timelineSlice.actions
