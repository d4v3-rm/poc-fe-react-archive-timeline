import { useAppDispatch, useAppSelector } from '../app/hooks'
import { moodOptions } from '../features/timeline/constants'
import { selectMoodFilter } from '../features/timeline/timelineSelectors'
import { setMoodFilter } from '../features/timeline/timelineSlice'
import { t } from '../i18n'
import './MoodFilterDock.scss'

export function MoodFilterDock() {
  const dispatch = useAppDispatch()
  const moodFilter = useAppSelector(selectMoodFilter)

  return (
    <aside className="filter-dock" aria-label={t('filters.ariaLabel')}>
      <section className="toolbar" aria-label={t('filters.ariaLabel')}>
        {moodOptions.map((option) => (
          <button
            key={option.id}
            className={`pill${moodFilter === option.id ? ' is-active' : ''}`}
            onClick={() => dispatch(setMoodFilter(option.id))}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </section>
    </aside>
  )
}
