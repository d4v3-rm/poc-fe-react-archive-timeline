import './StartupLoader.scss'

interface StartupLoaderProps {
  ariaLabel: string
  eyebrow: string
  label: string
}

export function StartupLoader({ ariaLabel, eyebrow, label }: StartupLoaderProps) {
  return (
    <div
      className="startup-loader"
      role="status"
      aria-live="polite"
      aria-label={ariaLabel}
    >
      <div className="startup-loader__scene" aria-hidden="true">
        <span className="startup-loader__ring startup-loader__ring--outer" />
        <span className="startup-loader__ring startup-loader__ring--middle" />
        <span className="startup-loader__ring startup-loader__ring--inner" />
        <span className="startup-loader__core" />
        <span className="startup-loader__satellite startup-loader__satellite--one" />
        <span className="startup-loader__satellite startup-loader__satellite--two" />
      </div>

      <p className="startup-loader__eyebrow">{eyebrow}</p>
      <p className="startup-loader__label">{label}</p>
    </div>
  )
}

