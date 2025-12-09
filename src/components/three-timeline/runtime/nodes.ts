import * as THREE from "three";
import type { PoeticEvent } from "../../../types";
import {
  branchLabels,
  createPoemGeometry,
  createRadialTexture,
  groupOrder,
  moodPalette,
  poemGroupStyles,
} from "./constants";
import type {
  NodeRuntime,
  ProjectionRuntime,
  SatelliteOrbit,
  SceneRuntime,
} from "./types";

interface CreateNodeRuntimeOptions {
  events: PoeticEvent[];
  projection: ProjectionRuntime;
  scene: SceneRuntime;
}

// #region Node Runtime
export const createNodeRuntime = ({
  events,
  projection,
  scene,
}: CreateNodeRuntimeOptions): NodeRuntime => {
  const { points } = projection;
  const { root, labelLayer, trackGeometry, trackMaterial, trackTexture } = scene;

  const interactiveMeshes: NodeRuntime["interactiveMeshes"] = [];
  const clusters: NodeRuntime["clusters"] = [];
  const labels: NodeRuntime["labels"] = [];

  const auraTexture = createRadialTexture();
  const trackedAuraTexture = auraTexture ? trackTexture(auraTexture) : null;

  points.forEach((point, index) => {
    const event = events[index];
    const baseColor = moodPalette[event.mood];
    const nodeRadius = 0.31 + Math.min(event.poems.length, 4) * 0.08;

    const nodeGeometry = trackGeometry(new THREE.IcosahedronGeometry(nodeRadius, 1));
    const nodeMaterial = trackMaterial(
      new THREE.MeshStandardMaterial({
        color: baseColor,
        emissive: baseColor,
        emissiveIntensity: 0.34,
        roughness: 0.38,
        metalness: 0.36,
        flatShading: true,
        transparent: true,
        opacity: 0.95,
      }),
    );

    const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
    node.position.copy(point);
    node.userData.event = event;
    root.add(node);
    interactiveMeshes.push(node);

    const shellGeometry = trackGeometry(new THREE.IcosahedronGeometry(nodeRadius * 1.7, 0));
    const shellMaterial = trackMaterial(
      new THREE.MeshBasicMaterial({
        color: baseColor,
        transparent: true,
        opacity: 0.23,
        wireframe: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );

    const shell = new THREE.Mesh(shellGeometry, shellMaterial);
    shell.position.copy(point);
    root.add(shell);

    const coreGeometry = trackGeometry(new THREE.SphereGeometry(nodeRadius * 0.36, 14, 14));
    const coreMaterial = trackMaterial(
      new THREE.MeshBasicMaterial({
        color: baseColor,
        transparent: true,
        opacity: 0.92,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );

    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    core.position.copy(point);
    root.add(core);

    const auraMaterial = trackMaterial(
      new THREE.SpriteMaterial({
        map: trackedAuraTexture ?? undefined,
        color: baseColor,
        transparent: true,
        opacity: 0.26,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );

    const aura = new THREE.Sprite(auraMaterial);
    aura.position.copy(point);
    const auraSize = nodeRadius * 8.6;
    aura.scale.set(auraSize, auraSize, 1);
    aura.userData.baseSize = auraSize;
    root.add(aura);

    const label = document.createElement("div");
    label.className = "timeline-node-label";
    label.classList.add(`timeline-node-label--${event.branch}`);
    label.innerHTML = `
      <div class="timeline-node-label__head">
        <span class="timeline-node-label__year">${event.year}</span>
        <span class="timeline-node-label__tag">${event.poems.length} poesie</span>
      </div>
      <strong class="timeline-node-label__title">${event.title}</strong>
      <small class="timeline-node-label__meta">${branchLabels[event.branch]} - ${event.location}</small>
    `;

    labelLayer.appendChild(label);
    labels.push({ event, element: label, node });

    const satelliteRoot = new THREE.Group();
    satelliteRoot.position.copy(point);
    root.add(satelliteRoot);

    const groupedPoems = groupOrder
      .map((group) => ({
        group,
        poems: event.poems.filter((poem) => poem.group === group),
      }))
      .filter((entry) => entry.poems.length > 0);

    const satellites: SatelliteOrbit[] = [];

    groupedPoems.forEach((entry, groupIndex) => {
      const style = poemGroupStyles[entry.group];
      const layerRadius = nodeRadius + 0.88 + groupIndex * 0.34;
      const layerHeight = (groupIndex - (groupedPoems.length - 1) / 2) * 0.3;

      entry.poems.forEach((_, poemIndex) => {
        const seed = groupIndex * 17 + poemIndex * 13;
        const angle =
          (poemIndex / entry.poems.length) * Math.PI * 2 +
          groupIndex * 0.82 +
          Math.sin(seed * 0.37) * 0.24;
        const height = layerHeight + Math.cos(seed * 0.49) * 0.18;
        const radius = layerRadius + Math.sin(seed * 0.61) * 0.14;

        const geometry = createPoemGeometry(entry.group, trackGeometry);
        const material = trackMaterial(
          new THREE.MeshStandardMaterial({
            color: style.color,
            emissive: style.color,
            emissiveIntensity: 0.42,
            roughness: 0.42,
            metalness: 0.2,
            transparent: true,
            opacity: 0.88,
          }),
        );

        const satellite = new THREE.Mesh(geometry, material);
        const sizeJitter = 0.9 + Math.sin(seed * 0.92) * 0.22;

        satellite.scale.setScalar(sizeJitter);
        satellite.position.set(
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius,
        );
        satellite.userData.event = event;

        satelliteRoot.add(satellite);
        interactiveMeshes.push(satellite);

        satellites.push({
          mesh: satellite,
          baseAngle: angle,
          radius,
          height,
          speed:
            style.speed +
            poemIndex * 0.018 +
            (Math.sin(seed * 0.41) + 1) * 0.012,
          phase: Math.abs(Math.sin(seed * 0.23)) * Math.PI * 2,
          wobble: 0.08 + Math.abs(Math.cos(seed * 0.57)) * 0.12,
          drift: 0.8 + Math.abs(Math.sin(seed * 0.35)) * 1.4,
          tilt: (Math.sin(seed * 0.69) - 0.5) * 0.78,
        });
      });
    });

    clusters.push({
      event,
      node,
      shell,
      core,
      aura,
      satelliteRoot,
      satellites,
    });
  });

  return {
    interactiveMeshes,
    clusters,
    labels,
  };
};
// #endregion


