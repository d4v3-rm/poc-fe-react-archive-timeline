import * as THREE from "three";
import type { PoeticEvent } from "../../../types";
import { branchStyles } from "./constants";
import type {
  ConnectionVisual,
  FlowParticle,
  FlowRuntime,
  ForkVisual,
  ProjectionRuntime,
  SceneRuntime,
} from "./types";

interface CreateFlowRuntimeOptions {
  events: PoeticEvent[];
  projection: ProjectionRuntime;
  scene: SceneRuntime;
}

// #region Flow Runtime
export const createFlowRuntime = ({
  events,
  projection,
  scene,
}: CreateFlowRuntimeOptions): FlowRuntime => {
  const { points, branchIndices, pointById, eventById } = projection;
  const { root, trackGeometry, trackMaterial } = scene;

  const branchVisuals: FlowRuntime["branchVisuals"] = [];
  const forkVisuals: ForkVisual[] = [];
  const connectionVisuals: ConnectionVisual[] = [];
  const flowParticles: FlowParticle[] = [];
  const flowGeometry = trackGeometry(new THREE.SphereGeometry(0.075, 9, 9));

  const spawnFlowParticles = (
    curve: THREE.Curve<THREE.Vector3>,
    color: number,
    count: number,
    speedRange: [number, number],
    scaleRange: [number, number],
    opacityRange: [number, number],
  ) => {
    for (let index = 0; index < count; index += 1) {
      const speed =
        speedRange[0] + Math.random() * (speedRange[1] - speedRange[0]);
      const scale =
        scaleRange[0] + Math.random() * (scaleRange[1] - scaleRange[0]);
      const opacity =
        opacityRange[0] + Math.random() * (opacityRange[1] - opacityRange[0]);

      const material = trackMaterial(
        new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      );

      const mesh = new THREE.Mesh(flowGeometry, material);
      mesh.scale.setScalar(scale);
      root.add(mesh);

      flowParticles.push({
        mesh,
        curve,
        offset: Math.random(),
        speed,
        scale,
        baseOpacity: opacity,
      });
    }
  };

  branchIndices.forEach((indices, branch) => {
    if (indices.length < 2) {
      return;
    }

    const style = branchStyles[branch];
    const branchPoints = indices.map((eventIndex, localIndex) => {
      const source = points[eventIndex];
      const drift = Math.sin(localIndex * 1.28 + style.phase) * 0.42;
      const lift = Math.cos(localIndex * 0.98 + style.phase * 1.3) * 0.26;

      return new THREE.Vector3(
        source.x + drift * 0.28,
        source.y + lift,
        source.z,
      );
    });

    const curve = new THREE.CatmullRomCurve3(
      branchPoints,
      false,
      "centripetal",
      0.34,
    );

    const branchGeometry = trackGeometry(
      new THREE.TubeGeometry(
        curve,
        Math.max(92, branchPoints.length * 54),
        0.052,
        10,
      ),
    );

    const branchMaterial = trackMaterial(
      new THREE.MeshStandardMaterial({
        color: style.color,
        emissive: style.color,
        emissiveIntensity: 0.52,
        roughness: 0.24,
        metalness: 0.2,
        transparent: true,
        opacity: 0.5,
        depthWrite: false,
      }),
    );

    const branchMesh = new THREE.Mesh(branchGeometry, branchMaterial);
    branchMesh.renderOrder = 2;
    root.add(branchMesh);

    const branchGlowGeometry = trackGeometry(
      new THREE.BufferGeometry().setFromPoints(curve.getPoints(190)),
    );

    const branchGlowMaterial = trackMaterial(
      new THREE.LineBasicMaterial({
        color: style.color,
        transparent: true,
        opacity: 0.34,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );

    const branchGlow = new THREE.Line(branchGlowGeometry, branchGlowMaterial);
    branchGlow.renderOrder = 3;
    root.add(branchGlow);

    spawnFlowParticles(
      curve,
      style.color,
      Math.max(10, indices.length * 5),
      [0.018, 0.045],
      [0.09, 0.16],
      [0.3, 0.5],
    );

    branchVisuals.push({ branch, mesh: branchMesh, glow: branchGlow });
  });

  events.forEach((event, index) => {
    if (!event.branchFrom) {
      return;
    }

    const fromPoint = pointById.get(event.branchFrom);
    const toPoint = points[index];

    if (!fromPoint || !toPoint) {
      return;
    }

    const controlPoint = fromPoint.clone().add(toPoint).multiplyScalar(0.5);
    controlPoint.x += (toPoint.x - fromPoint.x) * 0.18;
    controlPoint.y += 2.1 + Math.abs(fromPoint.x - toPoint.x) * 0.44;
    controlPoint.z +=
      Math.sin(index * 0.68 + branchStyles[event.branch].phase) * 0.72;

    const branchCurve = new THREE.QuadraticBezierCurve3(
      fromPoint,
      controlPoint,
      toPoint,
    );

    const linkGeometry = trackGeometry(
      new THREE.BufferGeometry().setFromPoints(branchCurve.getPoints(26)),
    );

    const linkMaterial = trackMaterial(
      new THREE.LineBasicMaterial({
        color: branchStyles[event.branch].color,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );

    const link = new THREE.Line(linkGeometry, linkMaterial);
    link.renderOrder = 2;
    root.add(link);

    spawnFlowParticles(
      branchCurve,
      branchStyles[event.branch].color,
      8,
      [0.024, 0.052],
      [0.07, 0.12],
      [0.26, 0.42],
    );

    forkVisuals.push({
      branch: event.branch,
      sourceId: event.branchFrom,
      targetId: event.id,
      line: link,
    });
  });

  const seenLinks = new Set<string>();

  events.forEach((event, sourceIndex) => {
    const sourcePoint = points[sourceIndex];

    event.connections.forEach((targetId) => {
      const targetPoint = pointById.get(targetId);

      if (!targetPoint) {
        return;
      }

      const linkKey = [event.id, targetId].sort().join("__");

      if (seenLinks.has(linkKey)) {
        return;
      }

      seenLinks.add(linkKey);
      const targetEvent = eventById.get(targetId);
      const sourceColor = branchStyles[event.branch].color;
      const targetColor = targetEvent
        ? branchStyles[targetEvent.branch].color
        : sourceColor;

      const controlPoint = sourcePoint
        .clone()
        .add(targetPoint)
        .multiplyScalar(0.5);
      controlPoint.x += (targetPoint.x - sourcePoint.x) * 0.08;
      controlPoint.y += 1.5 + Math.abs(targetPoint.x - sourcePoint.x) * 0.16;
      controlPoint.z += Math.cos(sourceIndex * 0.8 + targetPoint.z * 0.1) * 0.5;

      const blendedColor = new THREE.Color(sourceColor).lerp(
        new THREE.Color(targetColor),
        0.5,
      );

      const connectionCurve = new THREE.QuadraticBezierCurve3(
        sourcePoint,
        controlPoint,
        targetPoint,
      );

      const connectionGeometry = trackGeometry(
        new THREE.BufferGeometry().setFromPoints(connectionCurve.getPoints(22)),
      );

      const connectionMaterial = trackMaterial(
        new THREE.LineBasicMaterial({
          color: blendedColor,
          transparent: true,
          opacity: 0.17,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      );

      const connectionLine = new THREE.Line(
        connectionGeometry,
        connectionMaterial,
      );
      connectionLine.renderOrder = 1;
      root.add(connectionLine);

      spawnFlowParticles(
        connectionCurve,
        blendedColor.getHex(),
        4,
        [0.012, 0.03],
        [0.045, 0.09],
        [0.16, 0.28],
      );

      connectionVisuals.push({
        branch: event.branch,
        sourceId: event.id,
        targetId,
        line: connectionLine,
      });
    });
  });

  return {
    branchVisuals,
    forkVisuals,
    connectionVisuals,
    flowParticles,
  };
};
// #endregion
