import { bindTimelineInteractions } from "./interactions";
import { createFlowRuntime } from "./flows";
import { createNodeRuntime } from "./nodes";
import { createProjectionRuntime } from "./projection";
import { setupResizeLifecycle } from "./resize";
import { startRenderLoop } from "./render";
import {
  createSceneRuntime,
  disposeSceneRuntime,
} from "./scene";
import type { MountThreeTimelineOptions } from "./types";

export type {
  MountThreeTimelineOptions,
  TimelineRuntimeRefs,
} from "./types";

// #region Runtime Mount
export const mountThreeTimeline = ({
  locale,
  host,
  events,
  activeEventIdRef,
  onSelectRef,
  onHoverRef,
  focusOffsetByIdRef,
  targetOffsetRef,
}: MountThreeTimelineOptions) => {
  const sceneRuntime = createSceneRuntime(host);
  const projectionRuntime = createProjectionRuntime(events);

  focusOffsetByIdRef.current = projectionRuntime.focusOffsetById;

  if (activeEventIdRef.current) {
    const nextOffset = projectionRuntime.focusOffsetById.get(activeEventIdRef.current);

    if (typeof nextOffset === "number") {
      targetOffsetRef.current = nextOffset;
    }
  }

  const flowRuntime = createFlowRuntime({
    events,
    projection: projectionRuntime,
    scene: sceneRuntime,
  });

  const nodeRuntime = createNodeRuntime({
    locale,
    events,
    projection: projectionRuntime,
    scene: sceneRuntime,
  });

  const interactionRuntime = bindTimelineInteractions({
    refs: {
      onSelectRef,
      onHoverRef,
      targetOffsetRef,
    },
    projection: projectionRuntime,
    scene: sceneRuntime,
    nodes: nodeRuntime,
  });

  const teardownResize = setupResizeLifecycle({
    host,
    scene: sceneRuntime,
  });

  const stopRenderLoop = startRenderLoop({
    refs: {
      activeEventIdRef,
      targetOffsetRef,
    },
    hoveredState: interactionRuntime.hoveredState,
    projection: projectionRuntime,
    flow: flowRuntime,
    nodes: nodeRuntime,
    scene: sceneRuntime,
  });

  return () => {
    stopRenderLoop();
    teardownResize();
    interactionRuntime.cleanup();
    disposeSceneRuntime(sceneRuntime, host);
  };
};
// #endregion



