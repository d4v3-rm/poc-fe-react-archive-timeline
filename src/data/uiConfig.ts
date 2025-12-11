import rawUiConfig from "../content/ui-config.json";
import type { StartupLoaderConfig } from "../types";

interface RawStartupLoaderConfig {
  enabled?: boolean;
  delayMs?: number;
}

interface RawUiConfig {
  startupLoader?: RawStartupLoaderConfig;
}

const DEFAULT_STARTUP_LOADER_CONFIG: StartupLoaderConfig = {
  enabled: true,
  delayMs: 2000,
};

const toFiniteNumber = (value: unknown) =>
  typeof value === "number" && Number.isFinite(value) ? value : null;

const toStartupLoaderConfig = (
  config: RawStartupLoaderConfig | undefined,
): StartupLoaderConfig => {
  const delayMs = toFiniteNumber(config?.delayMs);

  return {
    enabled:
      typeof config?.enabled === "boolean"
        ? config.enabled
        : DEFAULT_STARTUP_LOADER_CONFIG.enabled,
    delayMs:
      delayMs === null
        ? DEFAULT_STARTUP_LOADER_CONFIG.delayMs
        : Math.min(Math.max(Math.round(delayMs), 0), 30000),
  };
};

const parsedUiConfig = rawUiConfig as RawUiConfig;

export const startupLoaderConfig = toStartupLoaderConfig(
  parsedUiConfig.startupLoader,
);
