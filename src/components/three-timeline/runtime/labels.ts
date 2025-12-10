import * as THREE from "three";
import { labelPlacementOffsets, rectanglesOverlap } from "./constants";
import type {
  LabelLayoutEntry,
  LabelRect,
  NodeRuntime,
  ProjectionRuntime,
  SceneRuntime,
} from "./types";

interface UpdateLabelLayerOptions {
  nodes: Pick<NodeRuntime, "labels">;
  projection: Pick<ProjectionRuntime, "eventById">;
  scene: Pick<SceneRuntime, "camera" | "renderer">;
  activeId: string | null;
  hoveredId: string | null;
}

const labelProjectScratch = new THREE.Vector3();
const labelWorldScratch = new THREE.Vector3();
const cameraDirectionScratch = new THREE.Vector3();
const cameraToLabelScratch = new THREE.Vector3();
const labelLayouts: LabelLayoutEntry[] = [];
const occupiedLabelRects: LabelRect[] = [];

// #region Labels
export const updateLabelLayer = ({
  nodes,
  projection,
  scene,
  activeId,
  hoveredId,
}: UpdateLabelLayerOptions) => {
  const { labels } = nodes;
  const { eventById } = projection;
  const { camera, renderer } = scene;

  const activeEvent = activeId ? (eventById.get(activeId) ?? null) : null;
  const relatedIds = new Set<string>(activeEvent ? [activeEvent.id, ...activeEvent.connections] : []);

  camera.getWorldDirection(cameraDirectionScratch);
  const viewportWidth = renderer.domElement.clientWidth;
  const viewportHeight = renderer.domElement.clientHeight;

  labelLayouts.length = 0;
  occupiedLabelRects.length = 0;

  labels.forEach(({ event, element, node }) => {
    node.getWorldPosition(labelWorldScratch);
    labelWorldScratch.y += 0.9 + Math.min(event.poems.length, 4) * 0.05;

    cameraToLabelScratch.copy(labelWorldScratch).sub(camera.position);

    const isBehindCamera = cameraDirectionScratch.dot(cameraToLabelScratch) <= 0;

    labelProjectScratch.copy(labelWorldScratch).project(camera);

    const outOfView =
      labelProjectScratch.z < -1 ||
      labelProjectScratch.z > 1 ||
      labelProjectScratch.x < -1.22 ||
      labelProjectScratch.x > 1.22 ||
      labelProjectScratch.y < -1.18 ||
      labelProjectScratch.y > 1.18;

    if (isBehindCamera || outOfView) {
      element.style.opacity = "0";
      element.style.zIndex = "0";
      element.classList.remove("is-active", "is-hovered", "is-related", "is-muted");
      return;
    }

    const x = (labelProjectScratch.x * 0.5 + 0.5) * viewportWidth;
    const y = (-labelProjectScratch.y * 0.5 + 0.5) * viewportHeight;
    const isActive = activeId === event.id;
    const isHovered = hoveredId === event.id;
    const isRelated = activeId !== null && relatedIds.has(event.id) && !isActive;
    const isMuted = hoveredId !== null && !isActive && !isHovered && !isRelated;

    const lift = isHovered ? -8 : isActive ? -4 : isRelated ? -2 : 0;
    const baseOpacity = isMuted ? "0.52" : isRelated ? "0.82" : "1";
    const priority = isActive ? 40 : isHovered ? 30 : isRelated ? 20 : 10;

    element.classList.toggle("is-active", isActive);
    element.classList.toggle("is-hovered", isHovered);
    element.classList.toggle("is-related", isRelated);
    element.classList.toggle("is-muted", isMuted);

    labelLayouts.push({
      element,
      x,
      y,
      depth: labelProjectScratch.z,
      isActive,
      isHovered,
      lift,
      baseOpacity,
      priority,
    });
  });

  labelLayouts
    .sort((first, second) => {
      if (first.priority !== second.priority) {
        return second.priority - first.priority;
      }

      return first.depth - second.depth;
    })
    .forEach((layout) => {
      const { element } = layout;
      const elementWidth = element.offsetWidth || 220;
      const elementHeight = element.offsetHeight || 74;
      let hasPlacement = false;
      let placedX = layout.x;
      let placedY = layout.y + layout.lift;

      for (const offset of labelPlacementOffsets) {
        const candidateX = layout.x + offset.x;
        const candidateY = layout.y + layout.lift + offset.y;

        const candidateRect: LabelRect = {
          left: candidateX - elementWidth * 0.5,
          right: candidateX + elementWidth * 0.5,
          top: candidateY - elementHeight * 0.5,
          bottom: candidateY + elementHeight * 0.5,
        };

        const overflowsViewport =
          candidateRect.left < 4 ||
          candidateRect.right > viewportWidth - 4 ||
          candidateRect.top < 4 ||
          candidateRect.bottom > viewportHeight - 4;

        if (overflowsViewport) {
          continue;
        }

        const hasCollision = occupiedLabelRects.some((rect) =>
          rectanglesOverlap(candidateRect, rect, 6),
        );

        if (hasCollision) {
          continue;
        }

        hasPlacement = true;
        placedX = candidateX;
        placedY = candidateY;
        occupiedLabelRects.push(candidateRect);
        break;
      }

      if (!hasPlacement && (layout.isActive || layout.isHovered)) {
        const forcedRect: LabelRect = {
          left: placedX - elementWidth * 0.5,
          right: placedX + elementWidth * 0.5,
          top: placedY - elementHeight * 0.5,
          bottom: placedY + elementHeight * 0.5,
        };

        occupiedLabelRects.push(forcedRect);
        hasPlacement = true;
      }

      if (!hasPlacement) {
        element.style.opacity = "0";
        element.style.zIndex = "0";
        return;
      }

      element.style.transform = `translate(-50%, -50%) translate(${placedX}px, ${placedY}px)`;
      element.style.opacity = layout.baseOpacity;
      element.style.zIndex = String(layout.priority);
    });
};
// #endregion



