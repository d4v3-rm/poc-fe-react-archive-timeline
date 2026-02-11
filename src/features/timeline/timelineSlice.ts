import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getDefaultEventId } from "../../data/poeticEvents";
import type { MoodFilter } from "./constants";

interface TimelineState {
  moodFilter: MoodFilter;
  selectedEventId: string | null;
  selectedPoemId: string | null;
  isNodeModalOpen: boolean;
  openPoemId: string | null;
  hoveredEventId: string | null;
}

const initialState: TimelineState = {
  moodFilter: "all",
  selectedEventId: getDefaultEventId(),
  selectedPoemId: null,
  isNodeModalOpen: false,
  openPoemId: null,
  hoveredEventId: null,
};

const timelineSlice = createSlice({
  name: "timeline",
  initialState,
  reducers: {
    setMoodFilter(state, action: PayloadAction<MoodFilter>) {
      state.moodFilter = action.payload;
    },
    resetMoodFilter(state) {
      state.moodFilter = "all";
    },
    selectEvent(state, action: PayloadAction<string>) {
      state.selectedEventId = action.payload;
      state.selectedPoemId = null;
      state.isNodeModalOpen = true;
      state.openPoemId = null;
      state.hoveredEventId = null;
    },
    selectRelatedEvent(state, action: PayloadAction<string>) {
      state.moodFilter = "all";
      state.selectedEventId = action.payload;
      state.selectedPoemId = null;
      state.isNodeModalOpen = true;
      state.openPoemId = null;
      state.hoveredEventId = null;
    },
    setHoveredEventId(state, action: PayloadAction<string | null>) {
      state.hoveredEventId = action.payload;
    },
    closeNodeModal(state) {
      state.isNodeModalOpen = false;
      state.openPoemId = null;
    },
    openPoemById(state, action: PayloadAction<string>) {
      state.selectedPoemId = action.payload;
      state.openPoemId = action.payload;
    },
    closePoem(state) {
      state.openPoemId = null;
    },
  },
});

export const timelineReducer = timelineSlice.reducer;
export const {
  setMoodFilter,
  resetMoodFilter,
  selectEvent,
  selectRelatedEvent,
  setHoveredEventId,
  closeNodeModal,
  openPoemById,
  closePoem,
} = timelineSlice.actions;
