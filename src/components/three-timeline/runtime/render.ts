import * as THREE from "three";
import { updateLabelLayer } from "./labels";
import type {
  FlowRuntime,
  HoveredState,
  NodeRuntime,
  ProjectionRuntime,
  SceneRuntime,
  TimelineRuntimeRefs,
} from "./types";

interface StartRenderLoopOptions {
  refs: Pick<TimelineRuntimeRefs, "activeEventIdRef" | "targetOffsetRef">;
  hoveredState: HoveredState;
  projection: Pick<ProjectionRuntime, "eventById">;
  flow: FlowRuntime;
  nodes: NodeRuntime;
  scene: Pick<
    SceneRuntime,
    | "scene"
    | "camera"
    | "renderer"
    | "controls"
    | "root"
    | "stars"
    | "starsMaterial"
  >;
}

const scaleScratch = new THREE.Vector3();
const satelliteScaleScratch = new THREE.Vector3();
const flowPointScratch = new THREE.Vector3();

// #region Render Loop
export const startRenderLoop = ({
  refs,
  hoveredState,
  projection,
  flow,
  nodes,
  scene,
}: StartRenderLoopOptions) => {
  const { activeEventIdRef, targetOffsetRef } = refs;
  const { eventById } = projection;
  const { branchVisuals, forkVisuals, connectionVisuals, flowParticles } = flow;
  const { clusters } = nodes;
  const { root, stars, starsMaterial, controls, renderer, camera } = scene;

  const clock = new THREE.Clock();
  let frameId = 0;
  let currentOffset = targetOffsetRef.current;

  root.position.z = currentOffset;

  const render = () => {
    frameId = window.requestAnimationFrame(render);

    const elapsed = clock.getElapsedTime();

    currentOffset = THREE.MathUtils.lerp(
      currentOffset,
      targetOffsetRef.current,
      0.078,
    );
    root.position.z = currentOffset;

    stars.rotation.y = elapsed * 0.012;
    stars.rotation.x = Math.sin(elapsed * 0.08) * 0.038;
    starsMaterial.opacity = 0.56 + Math.sin(elapsed * 0.22) * 0.08;

    const activeId = activeEventIdRef.current;
    const activeEvent = activeId ? (eventById.get(activeId) ?? null) : null;
    const activeBranch = activeEvent?.branch ?? null;
    const relatedIds = new Set<string>(
      activeEvent ? [activeEvent.id, ...activeEvent.connections] : [],
    );

    branchVisuals.forEach(({ branch, mesh, glow }, index) => {
      const isFocused = activeBranch === branch;
      const pulse = 0.78 + Math.sin(elapsed * 1.7 + index * 0.7) * 0.22;
      mesh.material.opacity = (isFocused ? 0.64 : 0.28) * pulse;
      mesh.material.emissiveIntensity = (isFocused ? 0.9 : 0.44) * pulse;
      glow.material.opacity = (isFocused ? 0.54 : 0.2) * pulse;
    });

    forkVisuals.forEach(({ sourceId, targetId, branch, line }, index) => {
      const isFocused =
        activeId !== null &&
        (sourceId === activeId ||
          targetId === activeId ||
          (relatedIds.has(sourceId) && relatedIds.has(targetId)));

      const pulse = 0.7 + Math.sin(elapsed * 1.5 + index * 0.9) * 0.3;
      line.material.opacity =
        (isFocused ? 0.72 : activeBranch === branch ? 0.38 : 0.18) * pulse;
    });

    connectionVisuals.forEach(({ sourceId, targetId, branch, line }, index) => {
      const isFocused =
        activeId !== null &&
        (sourceId === activeId ||
          targetId === activeId ||
          (relatedIds.has(sourceId) && relatedIds.has(targetId)));

      const pulse = 0.72 + Math.sin(elapsed * 1.2 + index * 1.4) * 0.28;
      line.material.opacity =
        (isFocused ? 0.46 : activeBranch === branch ? 0.2 : 0.12) * pulse;
    });

    flowParticles.forEach((particle, particleIndex) => {
      const progress = (particle.offset + elapsed * particle.speed) % 1;
      particle.curve.getPointAt(progress, flowPointScratch);
      particle.mesh.position.copy(flowPointScratch);

      const pulse = 0.74 + Math.sin(elapsed * 3 + particleIndex * 0.63) * 0.26;
      particle.mesh.material.opacity = particle.baseOpacity * pulse;
      particle.mesh.scale.setScalar(particle.scale * (0.86 + pulse * 0.34));
      particle.mesh.rotation.x = elapsed * 1.1;
      particle.mesh.rotation.y = elapsed * 1.6;
    });

    updateLabelLayer({
      nodes,
      projection,
      scene,
      activeId,
      hoveredId: hoveredState.current,
    });

    clusters.forEach((cluster, clusterIndex) => {
      const { event, node, shell, core, aura, satelliteRoot, satellites } =
        cluster;
      const isHovered = hoveredState.current === event.id;
      const isActive = activeId === event.id;

      const scaleTarget = isActive ? 1.52 : isHovered ? 1.24 : 1;
      scaleScratch.setScalar(scaleTarget);
      satelliteScaleScratch.setScalar(scaleTarget * 1.08);

      node.scale.lerp(scaleScratch, 0.13);
      shell.scale.lerp(scaleScratch, 0.1);
      core.scale.lerp(scaleScratch, 0.14);
      satelliteRoot.scale.lerp(satelliteScaleScratch, 0.12);

      const pulse = Math.sin(elapsed * 2.15 + clusterIndex * 0.58);
      node.material.opacity = isActive ? 0.98 : isHovered ? 0.94 : 0.86;
      node.material.emissiveIntensity =
        (isActive ? 1 : isHovered ? 0.7 : 0.42) + pulse * 0.07;

      shell.material.opacity =
        (isActive ? 0.42 : isHovered ? 0.3 : 0.2) + pulse * 0.03;
      shell.rotation.x = elapsed * 0.21 + clusterIndex * 0.18;
      shell.rotation.y = elapsed * 0.3 - clusterIndex * 0.16;
      shell.rotation.z = elapsed * 0.12;

      core.material.opacity =
        (isActive ? 0.96 : isHovered ? 0.84 : 0.7) +
        Math.sin(elapsed * 2.8 + clusterIndex * 0.6) * 0.05;

      const auraBaseSize = (aura.userData.baseSize as number) ?? aura.scale.x;
      const auraPulse = (isActive ? 1.24 : isHovered ? 1.12 : 1) + pulse * 0.08;
      const auraSize = auraBaseSize * auraPulse;

      aura.scale.set(auraSize, auraSize, 1);
      aura.material.opacity =
        (isActive ? 0.46 : isHovered ? 0.34 : 0.22) +
        Math.sin(elapsed * 1.8 + clusterIndex * 0.8) * 0.02;

      satellites.forEach((satellite, satIndex) => {
        const angle = satellite.baseAngle + elapsed * satellite.speed;
        const radial =
          satellite.radius +
          Math.sin(elapsed * satellite.drift + satellite.phase) *
            satellite.wobble;
        const hoverLift = isActive ? 0.08 : isHovered ? 0.05 : 0;
        const driftOffset = Math.sin(elapsed * 0.42 + satIndex * 0.8) * 0.06;

        satellite.mesh.position.set(
          Math.cos(angle) * radial + driftOffset,
          satellite.height +
            Math.sin(angle * 1.7 + satellite.phase) *
              (0.12 + satellite.wobble) +
            hoverLift,
          Math.sin(angle + satellite.tilt) * radial - driftOffset,
        );

        satellite.mesh.rotation.x = elapsed * (0.86 + satellite.wobble);
        satellite.mesh.rotation.y = elapsed * (1 + satellite.drift * 0.08);
        satellite.mesh.material.emissiveIntensity = isActive
          ? 0.92
          : isHovered
            ? 0.68
            : 0.44;
        satellite.mesh.material.opacity = isActive
          ? 0.96
          : isHovered
            ? 0.9
            : 0.82;
      });
    });

    controls.update();
    renderer.render(scene.scene, camera);
  };

  render();

  return () => {
    window.cancelAnimationFrame(frameId);
  };
};
// #endregion
