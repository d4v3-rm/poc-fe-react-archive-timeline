import { useAppSelector } from '../app/hooks'
import { selectStats } from '../features/timeline/timelineSelectors'

export function StatsPanel() {
  const stats = useAppSelector(selectStats)

  return (
    <div className="hero-panel__stats" aria-label="Statistiche timeline">
      <span className="hero-panel__stat" aria-label={`${stats.nodes} nodi`} tabIndex={0}>
        <strong className="hero-panel__value">{stats.nodes}</strong>
        <span className="hero-panel__icon hero-panel__icon--nodes" aria-hidden="true" />
        <span className="hero-panel__tooltip" role="tooltip">
          Nodi visibili con il filtro attuale
        </span>
      </span>
      <span className="hero-panel__stat" aria-label={`${stats.branches} rami`} tabIndex={0}>
        <strong className="hero-panel__value">{stats.branches}</strong>
        <span className="hero-panel__icon hero-panel__icon--branches" aria-hidden="true" />
        <span className="hero-panel__tooltip" role="tooltip">
          Diramazioni poetiche attive
        </span>
      </span>
      <span className="hero-panel__stat" aria-label={`${stats.poems} poesie`} tabIndex={0}>
        <strong className="hero-panel__value">{stats.poems}</strong>
        <span className="hero-panel__icon hero-panel__icon--poems" aria-hidden="true" />
        <span className="hero-panel__tooltip" role="tooltip">
          Totale poesie nei nodi correnti
        </span>
      </span>
    </div>
  )
}
