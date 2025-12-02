import { useAppDispatch, useAppSelector } from '../app/hooks'
import { moodOptions } from '../features/timeline/constants'
import { selectMoodFilter } from '../features/timeline/timelineSelectors'
import { setMoodFilter } from '../features/timeline/timelineSlice'

export function MoodFilterDock() {
  const dispatch = useAppDispatch()
  const moodFilter = useAppSelector(selectMoodFilter)

  return (
    <aside className="filter-dock" aria-label="Filtri mood">
      <section className="toolbar" aria-label="Filtri mood">
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
