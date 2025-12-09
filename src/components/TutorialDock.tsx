import { useAppSelector } from '../app/hooks'
import { selectHoveredEvent } from '../features/timeline/timelineSelectors'
import { messages, t } from '../i18n'
import './TutorialDock.scss'

export function TutorialDock() {
  const hoveredEvent = useAppSelector(selectHoveredEvent)

  return (
    <aside className="tutorial-dock" aria-label={t('tutorial.ariaLabel')}>
      <div className="interaction-hints">
        <p className="interaction-hints__item">
          <kbd>{messages.tutorial.actions.scroll.key}</kbd>
          <span>{messages.tutorial.actions.scroll.label}</span>
        </p>
        <p className="interaction-hints__item">
          <kbd>{messages.tutorial.actions.drag.key}</kbd>
          <span>{messages.tutorial.actions.drag.label}</span>
        </p>
        <p className="interaction-hints__item">
          <kbd>{messages.tutorial.actions.click.key}</kbd>
          <span>{messages.tutorial.actions.click.label}</span>
        </p>
        {hoveredEvent ? (
          <p className="interaction-hints__focus">
            {t('tutorial.focus', {
              year: hoveredEvent.year,
              title: hoveredEvent.title,
            })}
          </p>
        ) : null}
      </div>
    </aside>
  )
}
