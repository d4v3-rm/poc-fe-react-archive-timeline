import { useCallback, useId, useRef, type KeyboardEvent } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  getBranchLabels,
  getMoodLabels,
  getPoemGroupLabels,
} from "../features/timeline/constants";
import {
  selectEffectiveSelectedPoem,
  selectFilteredEvents,
  selectGroupedPoems,
  selectIsNodeModalOpen,
  selectRelatedEvents,
  selectSelectedEvent,
  selectSelectedNodeIndex,
} from "../features/timeline/timelineSelectors";
import {
  closeNodeModal,
  openPoemById,
  selectRelatedEvent,
} from "../features/timeline/timelineSlice";
import { useI18n } from "../i18n/useI18n";
import { useDialogA11y } from "./modal/useDialogA11y";
import "./NodeModal.scss";

const getGridColumnCount = (container: HTMLElement) => {
  const computedStyle = window.getComputedStyle(container);
  const columns = computedStyle.gridTemplateColumns
    .split(" ")
    .filter((entry) => entry.trim().length > 0);

  return Math.max(columns.length, 1);
};

const handleArrowNavigation = (
  event: KeyboardEvent<HTMLElement>,
  options?: { forceSingleColumn?: boolean },
) => {
  if (
    event.key !== "ArrowLeft" &&
    event.key !== "ArrowRight" &&
    event.key !== "ArrowUp" &&
    event.key !== "ArrowDown"
  ) {
    return;
  }

  const container = event.currentTarget;
  const buttons = Array.from(
    container.querySelectorAll<HTMLButtonElement>("button:not([disabled])"),
  );

  if (buttons.length === 0) {
    return;
  }

  const activeElement =
    document.activeElement instanceof HTMLButtonElement
      ? document.activeElement
      : null;
  const currentIndex = Math.max(
    buttons.indexOf(activeElement as HTMLButtonElement),
    0,
  );
  const columnCount = options?.forceSingleColumn
    ? 1
    : getGridColumnCount(container);

  let nextIndex = currentIndex;

  if (event.key === "ArrowRight") {
    nextIndex = Math.min(currentIndex + 1, buttons.length - 1);
  } else if (event.key === "ArrowLeft") {
    nextIndex = Math.max(currentIndex - 1, 0);
  } else if (event.key === "ArrowDown") {
    nextIndex = Math.min(currentIndex + columnCount, buttons.length - 1);
  } else if (event.key === "ArrowUp") {
    nextIndex = Math.max(currentIndex - columnCount, 0);
  }

  if (nextIndex !== currentIndex) {
    event.preventDefault();
    buttons[nextIndex]?.focus();
  }
};

export function NodeModal() {
  // #region State and Selectors
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();
  const dispatch = useAppDispatch();
  const isNodeModalOpen = useAppSelector(selectIsNodeModalOpen);
  const selectedEvent = useAppSelector(selectSelectedEvent);
  const selectedNodeIndex = useAppSelector(selectSelectedNodeIndex);
  const filteredEvents = useAppSelector(selectFilteredEvents);
  const groupedPoems = useAppSelector(selectGroupedPoems);
  const relatedEvents = useAppSelector(selectRelatedEvents);
  const effectiveSelectedPoem = useAppSelector(selectEffectiveSelectedPoem);
  const { locale, t } = useI18n();
  const moodLabels = getMoodLabels(locale);
  const branchLabels = getBranchLabels(locale);
  const poemGroupLabels = getPoemGroupLabels(locale);

  // #region Actions
  const closeModal = useCallback(() => {
    dispatch(closeNodeModal());
  }, [dispatch]);

  useDialogA11y({
    isOpen: isNodeModalOpen,
    dialogRef,
    onRequestClose: closeModal,
    initialFocusSelector: ".node-modal__close",
  });
  // #endregion

  // #region Guard
  if (!isNodeModalOpen || !selectedEvent) {
    return null;
  }
  // #endregion

  // #region Render
  return (
    <div
      ref={dialogRef}
      className="node-modal"
      role="dialog"
      aria-modal="true"
      aria-label={t("nodeModal.dialogAriaLabel")}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      aria-keyshortcuts="Escape"
      onClick={closeModal}
    >
      <article
        className="node-modal__card"
        role="document"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="node-modal__header">
          <p className={`mood-chip mood-chip--${selectedEvent.mood}`}>
            {moodLabels[selectedEvent.mood]}
          </p>
          <button
            className="node-modal__close"
            onClick={closeModal}
            type="button"
            aria-label={t("nodeModal.closeAriaLabel")}
          >
            {t("nodeModal.close")}
          </button>
        </header>

        <section
          className="node-modal__intro"
          aria-label={t("nodeModal.introAriaLabel")}
        >
          <div className="node-panel__facts">
            {selectedNodeIndex >= 0 && (
              <p className="node-panel__fact">
                {t("nodeModal.nodeCounter", {
                  current: selectedNodeIndex + 1,
                  total: filteredEvents.length,
                })}
              </p>
            )}
            <p className="node-panel__fact">{selectedEvent.year}</p>
            <p className="node-panel__fact">{selectedEvent.location}</p>
            <p className="node-panel__fact">
              {branchLabels[selectedEvent.branch]}
            </p>
          </div>
          <h2 id={titleId}>{selectedEvent.title}</h2>
          <p className="node-panel__description" id={descriptionId}>
            {selectedEvent.description}
          </p>
          <p className="node-panel__hint">{t("nodeModal.poemSelectionHint")}</p>
        </section>

        <div className="node-modal__body">
          <section
            className="poem-groups"
            aria-label={t("nodeModal.groupedPoemsAriaLabel")}
          >
            {groupedPoems.map(({ group, poems }) => (
              <article
                key={group}
                className={`poem-group poem-group--${group}`}
              >
                <p className="poem-group__title">
                  {poemGroupLabels[group]} ({poems.length})
                </p>
                <div
                  className="poem-group__items"
                  onKeyDown={(event) => handleArrowNavigation(event)}
                >
                  {poems.map((poem) => (
                    <button
                      key={poem.id}
                      className={`poem-chip${
                        effectiveSelectedPoem?.id === poem.id
                          ? " is-active"
                          : ""
                      }`}
                      onClick={() => dispatch(openPoemById(poem.id))}
                      type="button"
                      aria-haspopup="dialog"
                      aria-label={t("nodeModal.openPoemAriaLabel", {
                        title: poem.title,
                        author: poem.author,
                      })}
                    >
                      <strong>{poem.title}</strong>
                      <span>{poem.author}</span>
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </section>

          <section
            className="connections"
            aria-label={t("nodeModal.connectionsAriaLabel")}
          >
            <p className="connections__title">
              {t("nodeModal.connectionsTitle")}
            </p>
            <div
              className="connections__items"
              onKeyDown={(event) =>
                handleArrowNavigation(event, { forceSingleColumn: true })
              }
            >
              {relatedEvents.length > 0 ? (
                relatedEvents.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => dispatch(selectRelatedEvent(event.id))}
                    type="button"
                    aria-label={t("nodeModal.openRelatedNodeAriaLabel", {
                      year: event.year,
                      title: event.title,
                    })}
                  >
                    <span>{event.year}</span>
                    <strong>{event.title}</strong>
                  </button>
                ))
              ) : (
                <p className="connections__empty">
                  {t("nodeModal.connectionsEmpty")}
                </p>
              )}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
  // #endregion
}
