import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  branchLabels,
  moodLabels,
  poemGroupLabels,
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
import { t } from "../i18n";
import "./NodeModal.scss";

export function NodeModal() {
  // #region State and Selectors
  const dispatch = useAppDispatch();
  const isNodeModalOpen = useAppSelector(selectIsNodeModalOpen);
  const selectedEvent = useAppSelector(selectSelectedEvent);
  const selectedNodeIndex = useAppSelector(selectSelectedNodeIndex);
  const filteredEvents = useAppSelector(selectFilteredEvents);
  const groupedPoems = useAppSelector(selectGroupedPoems);
  const relatedEvents = useAppSelector(selectRelatedEvents);
  const effectiveSelectedPoem = useAppSelector(selectEffectiveSelectedPoem);
  // #endregion

  // #region Guard
  if (!isNodeModalOpen || !selectedEvent) {
    return null;
  }
  // #endregion

  // #region Actions
  const closeModal = () => {
    dispatch(closeNodeModal());
  };
  // #endregion

  // #region Render
  return (
    <div
      className="node-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="node-modal-title"
      onClick={closeModal}
    >
      <article
        className="node-modal__card"
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
          <h2 id="node-modal-title">{selectedEvent.title}</h2>
          <p className="node-panel__description">{selectedEvent.description}</p>
          <p className="node-panel__hint">
            {t("nodeModal.poemSelectionHint")}
          </p>
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
                <div className="poem-group__items">
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
            <p className="connections__title">{t("nodeModal.connectionsTitle")}</p>
            <div className="connections__items">
              {relatedEvents.length > 0 ? (
                relatedEvents.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => dispatch(selectRelatedEvent(event.id))}
                    type="button"
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
