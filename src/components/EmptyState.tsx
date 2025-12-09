import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectHasNoFilteredEvents } from '../features/timeline/timelineSelectors'
import { resetMoodFilter } from '../features/timeline/timelineSlice'
import { t } from '../i18n'
import './EmptyState.scss'

export function EmptyState() {
  const dispatch = useAppDispatch()
  const hasNoFilteredEvents = useAppSelector(selectHasNoFilteredEvents)

  if (!hasNoFilteredEvents) {
    return null
  }

  return (
    <div className="empty-state">
      <p>{t('emptyState.message')}</p>
      <button onClick={() => dispatch(resetMoodFilter())} type="button">
        {t('emptyState.resetButton')}
      </button>
    </div>
  )
}
