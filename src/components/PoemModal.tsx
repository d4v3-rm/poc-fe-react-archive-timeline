import { useCallback, useId, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  getMoodLabels,
  getPoemGroupLabels,
} from "../features/timeline/constants";
import {
  selectOpenPoem,
  selectSelectedEvent,
} from "../features/timeline/timelineSelectors";
import { closePoem } from "../features/timeline/timelineSlice";
import { useI18n } from "../i18n/useI18n";
import { useDialogA11y } from "./modal/useDialogA11y";
import "./PoemModal.scss";

export function PoemModal() {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();
  const dispatch = useAppDispatch();
  const openPoem = useAppSelector(selectOpenPoem);
  const selectedEvent = useAppSelector(selectSelectedEvent);
  const { locale, t } = useI18n();
  const moodLabels = getMoodLabels(locale);
  const poemGroupLabels = getPoemGroupLabels(locale);
  const closeModal = useCallback(() => {
    dispatch(closePoem());
  }, [dispatch]);

  useDialogA11y({
    isOpen: Boolean(openPoem && selectedEvent),
    dialogRef,
    onRequestClose: closeModal,
    initialFocusSelector: ".poem-modal__close",
  });

  if (!openPoem || !selectedEvent) {
    return null;
  }

  return (
    <div
      ref={dialogRef}
      className="poem-modal"
      role="dialog"
      aria-modal="true"
      aria-label={t("poemModal.dialogAriaLabel")}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      aria-keyshortcuts="Escape"
      onClick={closeModal}
    >
      <article
        className="poem-modal__card"
        role="document"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="poem-modal__header">
          <p className={`mood-chip mood-chip--${selectedEvent.mood}`}>
            {moodLabels[selectedEvent.mood]}
          </p>
          <button
            className="poem-modal__close"
            onClick={closeModal}
            type="button"
            aria-label={t("poemModal.closeAriaLabel")}
          >
            {t("poemModal.close")}
          </button>
        </header>

        <p className="poem-modal__meta">
          {selectedEvent.year}
          {t("poemModal.metaSeparator")}
          {selectedEvent.location}
          {t("poemModal.metaSeparator")}
          {poemGroupLabels[openPoem.group]}
        </p>
        <h3 id={titleId}>{openPoem.title}</h3>
        <p className="poem-modal__author">{openPoem.author}</p>
        <div className="poem-modal__body">
          <blockquote>
            <p id={descriptionId}>{openPoem.excerpt}</p>
          </blockquote>
        </div>
      </article>
    </div>
  );
}
