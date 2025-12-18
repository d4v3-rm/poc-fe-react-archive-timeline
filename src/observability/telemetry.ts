type TelemetryLevel = "info" | "error";

interface TelemetryPayload {
  [key: string]: unknown;
}

interface TelemetryEvent {
  sessionId: string;
  timestamp: string;
  level: TelemetryLevel;
  event: string;
  payload: TelemetryPayload;
}

interface RuntimeMetrics {
  startedAtMs: number;
  frameWindowStartMs: number;
  frameCountInWindow: number;
  lastFpsLogMs: number;
  lastFps: number;
  errorCount: number;
  modalOpenedAtMs: Record<string, number | null>;
}

const randomSeed = Math.random().toString(36).slice(2, 10);
const sessionId = `telemetry-${Date.now().toString(36)}-${randomSeed}`;
const now = () => performance.now();

const metrics: RuntimeMetrics = {
  startedAtMs: now(),
  frameWindowStartMs: 0,
  frameCountInWindow: 0,
  lastFpsLogMs: 0,
  lastFps: 0,
  errorCount: 0,
  modalOpenedAtMs: {
    node: null,
    poem: null,
  },
};

const getElapsedMinutes = (timestampMs: number) => {
  return Math.max((timestampMs - metrics.startedAtMs) / 60000, 1 / 60);
};

const shouldLog = (level: TelemetryLevel) => {
  return level === "error" || import.meta.env.DEV;
};

const emit = (event: string, level: TelemetryLevel, payload: TelemetryPayload) => {
  const telemetryEvent: TelemetryEvent = {
    sessionId,
    timestamp: new Date().toISOString(),
    level,
    event,
    payload,
  };

  if (shouldLog(level)) {
    const logger = level === "error" ? console.error : console.info;
    logger("[telemetry]", telemetryEvent);
  }
};

export const recordFrameSample = (timestampMs = now()) => {
  if (metrics.frameWindowStartMs === 0) {
    metrics.frameWindowStartMs = timestampMs;
    metrics.lastFpsLogMs = timestampMs;
  }

  metrics.frameCountInWindow += 1;
  const frameWindowElapsed = timestampMs - metrics.frameWindowStartMs;

  if (frameWindowElapsed < 1000) {
    return;
  }

  metrics.lastFps = (metrics.frameCountInWindow * 1000) / frameWindowElapsed;
  metrics.frameWindowStartMs = timestampMs;
  metrics.frameCountInWindow = 0;

  const shouldEmitFpsLog = timestampMs - metrics.lastFpsLogMs >= 15000;
  if (!shouldEmitFpsLog) {
    return;
  }

  metrics.lastFpsLogMs = timestampMs;
  emit("render.fps.sample", "info", {
    fps: Number(metrics.lastFps.toFixed(2)),
  });
};

export const trackModalState = (
  modal: "node" | "poem",
  isOpen: boolean,
  timestampMs = now(),
) => {
  const openedAtMs = metrics.modalOpenedAtMs[modal];

  if (isOpen) {
    if (openedAtMs === null) {
      metrics.modalOpenedAtMs[modal] = timestampMs;
      emit("ui.modal.open", "info", {
        modal,
      });
    }
    return;
  }

  if (openedAtMs === null) {
    return;
  }

  const durationMs = Math.max(0, timestampMs - openedAtMs);
  metrics.modalOpenedAtMs[modal] = null;

  emit("ui.modal.close", "info", {
    modal,
    durationMs: Math.round(durationMs),
  });
};

const resolveErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  return "Unknown runtime error";
};

export const recordRuntimeError = (
  source: string,
  error: unknown,
  timestampMs = now(),
) => {
  metrics.errorCount += 1;

  emit("runtime.error", "error", {
    source,
    message: resolveErrorMessage(error),
    errorRatePerMinute: Number(
      (metrics.errorCount / getElapsedMinutes(timestampMs)).toFixed(2),
    ),
    totalErrors: metrics.errorCount,
  });
};

export const getTelemetrySnapshot = (timestampMs = now()) => {
  return {
    sessionId,
    fps: Number(metrics.lastFps.toFixed(2)),
    totalErrors: metrics.errorCount,
    errorRatePerMinute: Number(
      (metrics.errorCount / getElapsedMinutes(timestampMs)).toFixed(2),
    ),
    openModals: Object.entries(metrics.modalOpenedAtMs)
      .filter(([, openedAt]) => openedAt !== null)
      .map(([modal]) => modal),
  };
};

if (typeof window !== "undefined") {
  (
    window as Window & {
      __POETRY_TELEMETRY__?: { getSnapshot: typeof getTelemetrySnapshot };
    }
  ).__POETRY_TELEMETRY__ = {
    getSnapshot: getTelemetrySnapshot,
  };
}

