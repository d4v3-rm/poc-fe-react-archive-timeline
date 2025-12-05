import rawUiConfig from '../content/ui-config.json'
import type { StartupLoaderConfig } from '../types'

interface RawStartupLoaderConfig {
  enabled?: boolean
  delayMs?: number
  ariaLabel?: string
  eyebrow?: string
  label?: string
}

interface RawUiConfig {
  startupLoader?: RawStartupLoaderConfig
}

const DEFAULT_STARTUP_LOADER_CONFIG: StartupLoaderConfig = {
  enabled: true,
  delayMs: 2000,
  ariaLabel: 'Caricamento archivio poetico',
  eyebrow: 'Archivio poetico 3D',
  label: 'Sincronizzazione timeline',
}

const toFiniteNumber = (value: unknown) =>
  typeof value === 'number' && Number.isFinite(value) ? value : null

const toText = (value: unknown, fallback: string) =>
  typeof value === 'string' && value.trim().length > 0 ? value.trim() : fallback

const toStartupLoaderConfig = (
  config: RawStartupLoaderConfig | undefined,
): StartupLoaderConfig => {
  const delayMs = toFiniteNumber(config?.delayMs)

  return {
    enabled:
      typeof config?.enabled === 'boolean'
        ? config.enabled
        : DEFAULT_STARTUP_LOADER_CONFIG.enabled,
    delayMs:
      delayMs === null
        ? DEFAULT_STARTUP_LOADER_CONFIG.delayMs
        : Math.min(Math.max(Math.round(delayMs), 0), 30000),
    ariaLabel: toText(config?.ariaLabel, DEFAULT_STARTUP_LOADER_CONFIG.ariaLabel),
    eyebrow: toText(config?.eyebrow, DEFAULT_STARTUP_LOADER_CONFIG.eyebrow),
    label: toText(config?.label, DEFAULT_STARTUP_LOADER_CONFIG.label),
  }
}

const parsedUiConfig = rawUiConfig as RawUiConfig

export const startupLoaderConfig = toStartupLoaderConfig(
  parsedUiConfig.startupLoader,
)
