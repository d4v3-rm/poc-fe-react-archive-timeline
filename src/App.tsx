import { Suspense, lazy, useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  ContentHealthNotice,
  EmptyState,
  LanguageSwitcher,
  MoodFilterDock,
  StartupLoader,
  StatsPanel,
  ThemeToggle,
  TutorialDock,
} from "./components";
import { startupLoaderConfig } from "./data/uiConfig";
import {
  selectEffectiveSelectedEventId,
  selectFilteredEvents,
  selectIsNodeModalOpen,
  selectOpenPoem,
  selectPoeticContentHealth,
} from "./features/timeline/timelineSelectors";
import {
  selectEvent,
  setHoveredEventId,
} from "./features/timeline/timelineSlice";
import { useI18n } from "./i18n/useI18n";
import { recordRuntimeError, trackModalState } from "./observability/telemetry";
import {
  getNextTheme,
  resolveInitialTheme,
  themeStorageKey,
  type AppTheme,
} from "./theme";
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
  const [theme, setTheme] = useState<AppTheme>(() => {
    return resolveInitialTheme();
  });
  const [showStartupLoader, setShowStartupLoader] = useState(
    startupLoaderConfig.enabled,
  );
  const dispatch = useAppDispatch();
  const { locale, t } = useI18n();
  const filteredEvents = useAppSelector(selectFilteredEvents);
  const activeEventId = useAppSelector(selectEffectiveSelectedEventId);
  const isNodeModalOpen = useAppSelector(selectIsNodeModalOpen);
  const openPoem = useAppSelector(selectOpenPoem);
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

  const handleThemeToggle = useCallback(() => {
    setTheme((currentTheme) => getNextTheme(currentTheme));
  }, []);
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
    try {
      window.localStorage.setItem("poetry_portal_locale", locale);
    } catch {
      // Ignore storage access errors.
    }
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme =
      theme === "light" ? "light" : "dark";

    try {
      window.localStorage.setItem(themeStorageKey, theme);
    } catch {
      // Ignore storage access errors.
    }
  }, [theme]);

  useEffect(() => {
    trackModalState("node", isNodeModalOpen);
  }, [isNodeModalOpen]);

  useEffect(() => {
    trackModalState("poem", Boolean(openPoem));
  }, [openPoem]);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      recordRuntimeError("window.error", event.error ?? event.message);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      recordRuntimeError("window.unhandledrejection", event.reason);
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener(
        "unhandledrejection",
        handleUnhandledRejection,
      );
    };
  }, []);
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
            <div className="ui-top__controls">
              <ThemeToggle theme={theme} onToggle={handleThemeToggle} />
              <LanguageSwitcher />
            </div>
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
