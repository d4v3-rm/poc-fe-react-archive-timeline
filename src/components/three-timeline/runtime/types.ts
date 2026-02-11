import type { MutableRefObject } from "react";
import type * as THREE from "three";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { AppLocale } from "../../../i18n";
import type { PoeticBranch, PoeticEvent } from "../../../types";

// #region Public Contracts
export interface TimelineRuntimeRefs {
  activeEventIdRef: MutableRefObject<string | null>;
  onSelectRef: MutableRefObject<(event: PoeticEvent) => void>;
  onHoverRef: MutableRefObject<(event: PoeticEvent | null) => void>;
  focusOffsetByIdRef: MutableRefObject<Map<string, number>>;
  targetOffsetRef: MutableRefObject<number>;
}

export interface MountThreeTimelineOptions extends TimelineRuntimeRefs {
  locale: AppLocale;
  host: HTMLDivElement;
  events: PoeticEvent[];
}
// #endregion

// #region Shared Helpers
export type TrackGeometry = <T extends THREE.BufferGeometry>(geometry: T) => T;

export type TrackMaterial = <T extends THREE.Material>(material: T) => T;

export type TrackTexture = <T extends THREE.Texture>(texture: T) => T;
// #endregion

// #region Scene Runtime
export interface SceneRuntime {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  labelLayer: HTMLDivElement;
  controls: OrbitControls;
  root: THREE.Group;
  stars: THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>;
  starsMaterial: THREE.PointsMaterial;
  trackedGeometries: THREE.BufferGeometry[];
  trackedMaterials: THREE.Material[];
  trackedTextures: THREE.Texture[];
  trackGeometry: TrackGeometry;
  trackMaterial: TrackMaterial;
  trackTexture: TrackTexture;
}

export interface ProjectionRuntime {
  points: THREE.Vector3[];
  minOffset: number;
  maxOffset: number;
  branchIndices: Map<PoeticBranch, number[]>;
  eventById: Map<string, PoeticEvent>;
  pointById: Map<string, THREE.Vector3>;
  focusOffsetById: Map<string, number>;
}
// #endregion

// #region Geometry Runtime
export interface SatelliteOrbit {
  mesh: THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>;
  baseAngle: number;
  radius: number;
  height: number;
  speed: number;
  phase: number;
  wobble: number;
  drift: number;
  tilt: number;
}

export interface NodeCluster {
  event: PoeticEvent;
  node: THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>;
  shell: THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>;
  core: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;
  aura: THREE.Sprite;
  satelliteRoot: THREE.Group;
  satellites: SatelliteOrbit[];
}

export interface BranchVisual {
  branch: PoeticBranch;
  mesh: THREE.Mesh<THREE.TubeGeometry, THREE.MeshStandardMaterial>;
  glow: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
}

export interface ForkVisual {
  branch: PoeticBranch;
  sourceId: string;
  targetId: string;
  line: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
}

export interface ConnectionVisual {
  branch: PoeticBranch;
  sourceId: string;
  targetId: string;
  line: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
}

export interface NodeLabelEntry {
  event: PoeticEvent;
  element: HTMLDivElement;
  node: THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>;
}

export interface LabelLayoutEntry {
  element: HTMLDivElement;
  x: number;
  y: number;
  depth: number;
  isActive: boolean;
  isHovered: boolean;
  isRelated: boolean;
  lift: number;
  baseOpacity: string;
  priority: number;
}

export interface LabelRect {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

export interface FlowParticle {
  mesh: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;
  curve: THREE.Curve<THREE.Vector3>;
  offset: number;
  speed: number;
  scale: number;
  baseOpacity: number;
}

export interface FlowRuntime {
  branchVisuals: BranchVisual[];
  forkVisuals: ForkVisual[];
  connectionVisuals: ConnectionVisual[];
  flowParticles: FlowParticle[];
}

export interface NodeRuntime {
  interactiveMeshes: THREE.Object3D[];
  clusters: NodeCluster[];
  labels: NodeLabelEntry[];
}
// #endregion

// #region Interaction Runtime
export interface HoveredState {
  current: string | null;
}

export interface InteractionRuntime {
  hoveredState: HoveredState;
  cleanup: () => void;
}
// #endregion
