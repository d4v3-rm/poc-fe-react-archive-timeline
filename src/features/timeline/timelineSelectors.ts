import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import {
  getPoeticContentDiagnostics,
  getPoeticEvents,
} from "../../data/poeticEvents";
import { selectLocale } from "../locale/localeSlice";
import type { PoemEntry, PoemGroup, PoeticEvent } from "../../types";
import { poemGroupOrder } from "./constants";

const toGroupedPoems = (poems: PoemEntry[]) => {
  const buckets = new Map<PoemGroup, PoemEntry[]>(
    poemGroupOrder.map((group) => [group, []]),
  );

  poems.forEach((poem) => {
    buckets.get(poem.group)?.push(poem);
  });

  return poemGroupOrder
    .map((group) => ({ group, poems: buckets.get(group) ?? [] }))
    .filter((entry) => entry.poems.length > 0);
};

const selectTimeline = (state: RootState) => state.timeline;

export const selectMoodFilter = createSelector(
  [selectTimeline],
  (timeline) => timeline.moodFilter,
);

const selectSelectedEventId = createSelector(
  [selectTimeline],
  (timeline) => timeline.selectedEventId,
);

const selectSelectedPoemId = createSelector(
  [selectTimeline],
  (timeline) => timeline.selectedPoemId,
);

const selectOpenPoemId = createSelector(
  [selectTimeline],
  (timeline) => timeline.openPoemId,
);

const selectHoveredEventId = createSelector(
  [selectTimeline],
  (timeline) => timeline.hoveredEventId,
);

export const selectIsNodeModalOpen = createSelector(
  [selectTimeline],
  (timeline) => timeline.isNodeModalOpen,
);

export const selectPoeticEvents = createSelector([selectLocale], (locale) =>
  getPoeticEvents(locale),
);

export const selectPoeticContentHealth = createSelector(
  [selectLocale],
  (locale) => {
    const diagnostics = getPoeticContentDiagnostics();

    return {
      ...diagnostics,
      activeLocale: locale,
      activeLocaleError: diagnostics.localeErrors[locale],
    };
  },
);

export const selectFilteredEvents = createSelector(
  [selectPoeticEvents, selectMoodFilter],
  (poeticEvents, moodFilter) =>
    poeticEvents.filter((event) =>
      moodFilter === "all" ? true : event.mood === moodFilter,
    ),
);

export const selectHasNoFilteredEvents = createSelector(
  [selectFilteredEvents],
  (filteredEvents) => filteredEvents.length === 0,
);

export const selectEffectiveSelectedEventId = createSelector(
  [selectFilteredEvents, selectSelectedEventId],
  (filteredEvents, selectedEventId) => {
    if (filteredEvents.length === 0) {
      return null;
    }

    if (
      selectedEventId &&
      filteredEvents.some((event) => event.id === selectedEventId)
    ) {
      return selectedEventId;
    }

    return filteredEvents[0].id;
  },
);

export const selectSelectedEvent = createSelector(
  [selectFilteredEvents, selectEffectiveSelectedEventId],
  (filteredEvents, effectiveSelectedEventId) =>
    filteredEvents.find((event) => event.id === effectiveSelectedEventId) ??
    null,
);

export const selectHoveredEvent = createSelector(
  [selectPoeticEvents, selectHoveredEventId],
  (poeticEvents, hoveredEventId) => {
    if (!hoveredEventId) {
      return null;
    }

    return poeticEvents.find((event) => event.id === hoveredEventId) ?? null;
  },
);

export const selectEffectiveSelectedPoem = createSelector(
  [selectSelectedEvent, selectSelectedPoemId],
  (selectedEvent, selectedPoemId) => {
    if (!selectedEvent || selectedEvent.poems.length === 0) {
      return null;
    }

    if (!selectedPoemId) {
      return selectedEvent.poems[0];
    }

    return (
      selectedEvent.poems.find((poem) => poem.id === selectedPoemId) ??
      selectedEvent.poems[0]
    );
  },
);

export const selectOpenPoem = createSelector(
  [selectSelectedEvent, selectOpenPoemId],
  (selectedEvent, openPoemId) => {
    if (!selectedEvent || !openPoemId) {
      return null;
    }

    return selectedEvent.poems.find((poem) => poem.id === openPoemId) ?? null;
  },
);

export const selectGroupedPoems = createSelector(
  [selectSelectedEvent],
  (selectedEvent) => (selectedEvent ? toGroupedPoems(selectedEvent.poems) : []),
);

export const selectRelatedEvents = createSelector(
  [selectPoeticEvents, selectSelectedEvent],
  (poeticEvents, selectedEvent) => {
    if (!selectedEvent) {
      return [];
    }

    const eventsById = new Map<string, PoeticEvent>(
      poeticEvents.map((event) => [event.id, event]),
    );

    return selectedEvent.connections
      .map((id) => eventsById.get(id))
      .filter((event): event is PoeticEvent => Boolean(event));
  },
);

export const selectStats = createSelector(
  [selectFilteredEvents],
  (filteredEvents) => {
    const branches = new Set(filteredEvents.map((event) => event.branch)).size;
    const poems = filteredEvents.reduce(
      (accumulator, event) => accumulator + event.poems.length,
      0,
    );

    return {
      nodes: filteredEvents.length,
      branches,
      poems,
    };
  },
);

export const selectSelectedNodeIndex = createSelector(
  [selectFilteredEvents, selectEffectiveSelectedEventId],
  (filteredEvents, effectiveSelectedEventId) =>
    filteredEvents.findIndex((event) => event.id === effectiveSelectedEventId),
);
