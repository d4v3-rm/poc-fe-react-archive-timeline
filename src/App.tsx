import { Suspense, lazy, useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  ContentHealthNotice,
  EmptyState,
  LanguageSwitcher,
  MoodFilterDock,
  StartupLoader,
  StatsPanel,
  TutorialDock,
} from "./components";
import { startupLoaderConfig } from "./data/uiConfig";
import {
  selectEffectiveSelectedEventId,
  selectFilteredEvents,
  selectPoeticContentHealth,
} from "./features/timeline/timelineSelectors";
import {
  selectEvent,
  setHoveredEventId,
} from "./features/timeline/timelineSlice";
import { useI18n } from "./i18n/useI18n";
import type { PoeticEvent } from "./types";
import "./App.scss";

const LazyThreeTimeline = lazy(() =>
  import("./components/three-timeline").then((module) => ({
    default: module.ThreeTimeline,
  })),
);

const LazyNodeModal = lazy(() =>
  import("./components/NodeModal").then((module) => ({
    default: module.NodeModal,
  })),
);

const LazyPoemModal = lazy(() =>
  import("./components/PoemModal").then((module) => ({
    default: module.PoemModal,
  })),
);

function App() {
  // #region State and Selectors
  const [showStartupLoader, setShowStartupLoader] = useState(
    startupLoaderConfig.enabled,
  );
  const dispatch = useAppDispatch();
  const { locale, t } = useI18n();
  const filteredEvents = useAppSelector(selectFilteredEvents);
  const activeEventId = useAppSelector(selectEffectiveSelectedEventId);
  const contentHealth = useAppSelector(selectPoeticContentHealth);
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
    window.localStorage.setItem("poetry_portal_locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);
  // #endregion

  // #region Render
  return (
    <div className="app-shell">
      {showStartupLoader ? (
        <StartupLoader
          ariaLabel={t("loader.defaults.ariaLabel")}
          eyebrow={t("loader.defaults.eyebrow")}
          label={t("loader.defaults.label")}
        />
      ) : null}
      <div className="ambient-glow ambient-glow--left" />
      <div className="ambient-glow ambient-glow--right" />

      <main className="stage" aria-label={t("app.stageAriaLabel")}>
        <Suspense
          fallback={
            <div className="stage-loading" role="status" aria-live="polite">
              {t("app.loadingExperience")}
            </div>
          }
        >
          {!contentHealth.hasFatalError ? (
            <LazyThreeTimeline
              locale={locale}
              events={filteredEvents}
              activeEventId={activeEventId}
              onSelect={handleSelect}
              onHover={handleHover}
            />
          ) : null}

          <ContentHealthNotice />

          <section className="ui-top">
            <header className="hero-panel">
              <StatsPanel />
            </header>
            <LanguageSwitcher />
          </section>

          {!contentHealth.hasFatalError ? (
            <>
              <TutorialDock />

              <MoodFilterDock />
              <EmptyState />
              <LazyNodeModal />
              <LazyPoemModal />
            </>
          ) : null}
        </Suspense>
      </main>
    </div>
  );
  // #endregion
}

export default App;
