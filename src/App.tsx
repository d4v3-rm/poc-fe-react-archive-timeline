import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { EmptyState } from "./components/EmptyState";
import { MoodFilterDock } from "./components/MoodFilterDock";
import { NodeModal } from "./components/NodeModal";
import { PoemModal } from "./components/PoemModal";
import { StartupLoader } from "./components/StartupLoader";
import { StatsPanel } from "./components/StatsPanel";
import { ThreeTimeline } from "./components/three-timeline/ThreeTimeline";
import { TutorialDock } from "./components/TutorialDock";
import { startupLoaderConfig } from "./data/uiConfig";
import {
  selectEffectiveSelectedEventId,
  selectFilteredEvents,
  selectIsNodeModalOpen,
  selectOpenPoem,
} from "./features/timeline/timelineSelectors";
import {
  closeNodeModal,
  closePoem,
  selectEvent,
  setHoveredEventId,
} from "./features/timeline/timelineSlice";
import type { PoeticEvent } from "./types";
import "./App.scss";

function App() {
  // #region State and Selectors
  const [showStartupLoader, setShowStartupLoader] = useState(
    startupLoaderConfig.enabled,
  );
  const dispatch = useAppDispatch();
  const filteredEvents = useAppSelector(selectFilteredEvents);
  const activeEventId = useAppSelector(selectEffectiveSelectedEventId);
  const isNodeModalOpen = useAppSelector(selectIsNodeModalOpen);
  const openPoem = useAppSelector(selectOpenPoem);
  // #endregion

  // #region Event Handlers
  const handleSelect = useCallback(
    (event: PoeticEvent) => {
      dispatch(selectEvent(event.id));
    },
    [dispatch],
  );

  const handleHover = useCallback(
    (event: PoeticEvent | null) => {
      dispatch(setHoveredEventId(event?.id ?? null));
    },
    [dispatch],
  );
  // #endregion

  // #region Effects
  useEffect(() => {
    if (!startupLoaderConfig.enabled) {
      return;
    }

    const timer = window.setTimeout(() => {
      setShowStartupLoader(false);
    }, startupLoaderConfig.delayMs);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!isNodeModalOpen && !openPoem) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (openPoem) {
          dispatch(closePoem());
          return;
        }

        dispatch(closeNodeModal());
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [dispatch, isNodeModalOpen, openPoem]);
  // #endregion

  // #region Render
  return (
    <div className="app-shell">
      {showStartupLoader ? (
        <StartupLoader
          ariaLabel={startupLoaderConfig.ariaLabel}
          eyebrow={startupLoaderConfig.eyebrow}
          label={startupLoaderConfig.label}
        />
      ) : null}
      <div className="ambient-glow ambient-glow--left" />
      <div className="ambient-glow ambient-glow--right" />

      <main
        className="stage"
        aria-label="Timeline poetica fullscreen con diramazioni"
      >
        <ThreeTimeline
          events={filteredEvents}
          activeEventId={activeEventId}
          onSelect={handleSelect}
          onHover={handleHover}
        />

        <section className="ui-top">
          <header className="hero-panel">
            <StatsPanel />
          </header>
        </section>

        <TutorialDock />

        <MoodFilterDock />
        <EmptyState />
        <NodeModal />
        <PoemModal />
      </main>
    </div>
  );
  // #endregion
}

export default App;

