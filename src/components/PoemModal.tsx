import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getMoodLabels, getPoemGroupLabels } from '../features/timeline/constants'
import { selectOpenPoem, selectSelectedEvent } from '../features/timeline/timelineSelectors'
import { closePoem } from '../features/timeline/timelineSlice'
import { useI18n } from '../i18n/useI18n'
import './PoemModal.scss'

export function PoemModal() {
  const dispatch = useAppDispatch()
  const openPoem = useAppSelector(selectOpenPoem)
  const selectedEvent = useAppSelector(selectSelectedEvent)
  const { locale, t } = useI18n()
  const moodLabels = getMoodLabels(locale)
  const poemGroupLabels = getPoemGroupLabels(locale)

  if (!openPoem || !selectedEvent) {
    return null
  }

  return (
    <div
      className="poem-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="poem-modal-title"
      onClick={() => dispatch(closePoem())}
    >
      <article className="poem-modal__card" onClick={(event) => event.stopPropagation()}>
        <header className="poem-modal__header">
          <p className={`mood-chip mood-chip--${selectedEvent.mood}`}>
            {moodLabels[selectedEvent.mood]}
          </p>
          <button className="poem-modal__close" onClick={() => dispatch(closePoem())} type="button">
            {t('poemModal.close')}
          </button>
        </header>

        <p className="poem-modal__meta">
          {selectedEvent.year}
          {t('poemModal.metaSeparator')}
          {selectedEvent.location}
          {t('poemModal.metaSeparator')}
          {poemGroupLabels[openPoem.group]}
        </p>
        <h3 id="poem-modal-title">{openPoem.title}</h3>
        <p className="poem-modal__author">{openPoem.author}</p>
        <div className="poem-modal__body">
          <blockquote>
            <p>{openPoem.excerpt}</p>
          </blockquote>
        </div>
      </article>
    </div>
  )
}

