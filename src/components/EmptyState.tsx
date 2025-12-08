import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectHasNoFilteredEvents } from '../features/timeline/timelineSelectors'
import { resetMoodFilter } from '../features/timeline/timelineSlice'
import './EmptyState.scss'

export function EmptyState() {
  const dispatch = useAppDispatch()
  const hasNoFilteredEvents = useAppSelector(selectHasNoFilteredEvents)

  if (!hasNoFilteredEvents) {
    return null
  }

  return (
    <div className="empty-state">
      <p>Nessun nodo con il filtro corrente.</p>
      <button onClick={() => dispatch(resetMoodFilter())} type="button">
        Ripristina tutti i mood
      </button>
    </div>
  )
}
