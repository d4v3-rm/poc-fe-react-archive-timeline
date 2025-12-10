import { useAppSelector } from '../app/hooks'
import { selectStats } from '../features/timeline/timelineSelectors'
import { useI18n } from '../i18n/useI18n'
import './StatsPanel.scss'

export function StatsPanel() {
  const stats = useAppSelector(selectStats)
  const { t } = useI18n()

  return (
    <div className="hero-panel__stats" aria-label={t('stats.ariaLabel')}>
      <span
        className="hero-panel__stat"
        aria-label={t('stats.nodes.ariaLabel', { count: stats.nodes })}
        tabIndex={0}
      >
        <strong className="hero-panel__value">{stats.nodes}</strong>
        <span className="hero-panel__icon hero-panel__icon--nodes" aria-hidden="true" />
        <span className="hero-panel__tooltip" role="tooltip">
          {t('stats.nodes.tooltip')}
        </span>
      </span>
      <span
        className="hero-panel__stat"
        aria-label={t('stats.branches.ariaLabel', { count: stats.branches })}
        tabIndex={0}
      >
        <strong className="hero-panel__value">{stats.branches}</strong>
        <span className="hero-panel__icon hero-panel__icon--branches" aria-hidden="true" />
        <span className="hero-panel__tooltip" role="tooltip">
          {t('stats.branches.tooltip')}
        </span>
      </span>
      <span
        className="hero-panel__stat"
        aria-label={t('stats.poems.ariaLabel', { count: stats.poems })}
        tabIndex={0}
      >
        <strong className="hero-panel__value">{stats.poems}</strong>
        <span className="hero-panel__icon hero-panel__icon--poems" aria-hidden="true" />
        <span className="hero-panel__tooltip" role="tooltip">
          {t('stats.poems.tooltip')}
        </span>
      </span>
    </div>
  )
}

