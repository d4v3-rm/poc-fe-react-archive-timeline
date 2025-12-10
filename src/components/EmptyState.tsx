import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectHasNoFilteredEvents } from '../features/timeline/timelineSelectors'
import { resetMoodFilter } from '../features/timeline/timelineSlice'
import { useI18n } from '../i18n/useI18n'
import './EmptyState.scss'

export function EmptyState() {
  const dispatch = useAppDispatch()
  const hasNoFilteredEvents = useAppSelector(selectHasNoFilteredEvents)
  const { t } = useI18n()

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

