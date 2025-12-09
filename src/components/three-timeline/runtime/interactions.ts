import * as THREE from "three";
import type {
  InteractionRuntime,
  NodeRuntime,
  ProjectionRuntime,
  SceneRuntime,
  TimelineRuntimeRefs,
} from "./types";

interface BindTimelineInteractionsOptions {
  refs: Pick<
    TimelineRuntimeRefs,
    "onSelectRef" | "onHoverRef" | "targetOffsetRef"
  >;
  projection: Pick<ProjectionRuntime, "minOffset" | "maxOffset">;
  scene: Pick<SceneRuntime, "renderer" | "camera" | "controls">;
  nodes: Pick<NodeRuntime, "interactiveMeshes">;
}

// #region Interactions
export const bindTimelineInteractions = ({
  refs,
  projection,
  scene,
  nodes,
}: BindTimelineInteractionsOptions): InteractionRuntime => {
  const pointer = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();

  const { onSelectRef, onHoverRef, targetOffsetRef } = refs;
  const { minOffset, maxOffset } = projection;
  const { renderer, camera, controls } = scene;
  const { interactiveMeshes } = nodes;

  const hoveredState: InteractionRuntime["hoveredState"] = {
    current: null,
  };

  const resolveEventAtPointer = (clientX: number, clientY: number) => {
    const bounds = renderer.domElement.getBoundingClientRect();

    pointer.x = ((clientX - bounds.left) / bounds.width) * 2 - 1;
    pointer.y = -((clientY - bounds.top) / bounds.height) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);

    const hit = raycaster.intersectObjects(interactiveMeshes, false)[0];

    if (!hit) {
      return null;
    }

    return (hit.object.userData.event as Parameters<
      TimelineRuntimeRefs["onSelectRef"]["current"]
    >[0] | null) ?? null;
  };

  let activeTouchPointerId: number | null = null;
  let touchStartX = 0;
  let touchStartY = 0;
  let touchLastY = 0;
  let touchGesture: "idle" | "timeline" | "camera" = "idle";
  let suppressClickUntil = 0;

  const updateTimelineOffset = (deltaY: number, speed: number) => {
    const nextTarget = targetOffsetRef.current - deltaY * speed;
    targetOffsetRef.current = THREE.MathUtils.clamp(nextTarget, minOffset, maxOffset);
  };

  const updateHoveredEvent = (
    hoveredEvent: Parameters<TimelineRuntimeRefs["onHoverRef"]["current"]>[0],
  ) => {
    const nextHoveredId = hoveredEvent?.id ?? null;

    if (nextHoveredId === hoveredState.current) {
      return;
    }

    hoveredState.current = nextHoveredId;
    renderer.domElement.style.cursor = nextHoveredId ? "pointer" : "grab";
    onHoverRef.current(hoveredEvent);
  };

  const handlePointerDown = (event: PointerEvent) => {
    if (event.pointerType !== "touch") {
      return;
    }

    activeTouchPointerId = event.pointerId;
    touchStartX = event.clientX;
    touchStartY = event.clientY;
    touchLastY = event.clientY;
    touchGesture = "idle";

    if (renderer.domElement.setPointerCapture) {
      renderer.domElement.setPointerCapture(event.pointerId);
    }
  };

  const handlePointerMove = (event: PointerEvent) => {
    if (event.pointerType === "touch" && activeTouchPointerId === event.pointerId) {
      const deltaX = event.clientX - touchStartX;
      const deltaY = event.clientY - touchStartY;
      const travel = Math.abs(deltaX) + Math.abs(deltaY);

      if (touchGesture === "idle" && travel > 8) {
        touchGesture = Math.abs(deltaY) > Math.abs(deltaX) * 1.15 ? "timeline" : "camera";
      }

      if (touchGesture === "timeline") {
        controls.enabled = false;
        event.preventDefault();
        const stepY = event.clientY - touchLastY;
        const speed = Math.abs(stepY) > 14 ? 0.07 : 0.05;
        updateTimelineOffset(stepY, speed);
        suppressClickUntil = performance.now() + 260;
      }

      touchLastY = event.clientY;
      return;
    }

    const hoveredEvent = resolveEventAtPointer(event.clientX, event.clientY);
    updateHoveredEvent(hoveredEvent);
  };

  const handlePointerLeave = () => {
    controls.enabled = true;
    updateHoveredEvent(null);
  };

  const handlePointerRelease = (event: PointerEvent) => {
    if (event.pointerType !== "touch" || activeTouchPointerId !== event.pointerId) {
      return;
    }

    if (renderer.domElement.releasePointerCapture) {
      renderer.domElement.releasePointerCapture(event.pointerId);
    }

    activeTouchPointerId = null;
    touchGesture = "idle";
    controls.enabled = true;
    renderer.domElement.style.cursor = "grab";
  };

  const handleClick = (event: MouseEvent) => {
    if (performance.now() < suppressClickUntil) {
      return;
    }

    const selectedEvent = resolveEventAtPointer(event.clientX, event.clientY);

    if (!selectedEvent) {
      return;
    }

    onSelectRef.current(selectedEvent);
  };

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();

    const speed = Math.abs(event.deltaY) > 65 ? 0.016 : 0.011;
    updateTimelineOffset(event.deltaY, speed);
  };

  renderer.domElement.style.cursor = "grab";
  renderer.domElement.addEventListener("pointerdown", handlePointerDown);
  renderer.domElement.addEventListener("pointermove", handlePointerMove);
  renderer.domElement.addEventListener("pointerleave", handlePointerLeave);
  renderer.domElement.addEventListener("pointerup", handlePointerRelease);
  renderer.domElement.addEventListener("pointercancel", handlePointerRelease);
  renderer.domElement.addEventListener("click", handleClick);
  renderer.domElement.addEventListener("wheel", handleWheel, {
    passive: false,
  });

  return {
    hoveredState,
    cleanup: () => {
      renderer.domElement.removeEventListener("pointerdown", handlePointerDown);
      renderer.domElement.removeEventListener("pointermove", handlePointerMove);
      renderer.domElement.removeEventListener("pointerleave", handlePointerLeave);
      renderer.domElement.removeEventListener("pointerup", handlePointerRelease);
      renderer.domElement.removeEventListener("pointercancel", handlePointerRelease);
      renderer.domElement.removeEventListener("click", handleClick);
      renderer.domElement.removeEventListener("wheel", handleWheel);

      controls.enabled = true;
      renderer.domElement.style.cursor = "grab";
      hoveredState.current = null;
      onHoverRef.current(null);
    },
  };
};
// #endregion


