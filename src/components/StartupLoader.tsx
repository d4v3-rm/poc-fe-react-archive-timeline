export function StartupLoader() {
  return (
    <div
      className="startup-loader"
      role="status"
      aria-live="polite"
      aria-label="Caricamento archivio poetico"
    >
      <div className="startup-loader__scene" aria-hidden="true">
        <span className="startup-loader__ring startup-loader__ring--outer" />
        <span className="startup-loader__ring startup-loader__ring--middle" />
        <span className="startup-loader__ring startup-loader__ring--inner" />
        <span className="startup-loader__core" />
        <span className="startup-loader__satellite startup-loader__satellite--one" />
        <span className="startup-loader__satellite startup-loader__satellite--two" />
      </div>

      <p className="startup-loader__eyebrow">Archivio poetico 3D</p>
      <p className="startup-loader__label">Sincronizzazione timeline</p>
    </div>
  )
}
