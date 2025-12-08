import { useAppSelector } from '../app/hooks'
import { selectHoveredEvent } from '../features/timeline/timelineSelectors'
import './TutorialDock.scss'

export function TutorialDock() {
  const hoveredEvent = useAppSelector(selectHoveredEvent)

  return (
    <aside className="tutorial-dock" aria-label="Tutorial navigazione">
      <div className="interaction-hints">
        <p className="interaction-hints__item">
          <kbd>Scroll</kbd>
          <span>tempo</span>
        </p>
        <p className="interaction-hints__item">
          <kbd>Drag</kbd>
          <span>camera</span>
        </p>
        <p className="interaction-hints__item">
          <kbd>Click</kbd>
          <span>nodo</span>
        </p>
        {hoveredEvent ? (
          <p className="interaction-hints__focus">
            {hoveredEvent.year}: {hoveredEvent.title}
          </p>
        ) : null}
      </div>
    </aside>
  )
}
