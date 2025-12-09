import * as THREE from "three";
import type { PoemGroup, PoeticBranch, PoeticMood } from "../../../types";
import { messages } from "../../../i18n";
import type { LabelRect, TrackGeometry } from "./types";

export const moodPalette: Record<PoeticMood, number> = {
  amore: 0xf7b874,
  natura: 0x6ed0a6,
  rivolta: 0xff7b7b,
  esilio: 0x88b9ff,
  spirituale: 0xc9a5ff,
};

export const branchStyles: Record<
  PoeticBranch,
  { offsetX: number; offsetY: number; color: number; phase: number }
> = {
  radice: { offsetX: 0, offsetY: 0, color: 0x87a8ff, phase: 0.2 },
  visione: { offsetX: -4.25, offsetY: 1.4, color: 0x78dcb2, phase: 1.1 },
  civile: { offsetX: 4.35, offsetY: -1.1, color: 0xff9f90, phase: 1.9 },
  performativa: { offsetX: 2.95, offsetY: 2.25, color: 0xd5b0ff, phase: 2.5 },
};

export const poemGroupStyles: Record<PoemGroup, { color: number; speed: number }> =
  {
    manifesto: { color: 0xffcc84, speed: 0.22 },
    ciclo: { color: 0x88c8ff, speed: 0.18 },
    frammenti: { color: 0xd9b8ff, speed: 0.26 },
  };

export const branchLabels: Record<PoeticBranch, string> = {
  radice: messages.timeline.branchLabels.radice,
  visione: messages.timeline.branchLabels.visione,
  civile: messages.timeline.branchLabels.civile,
  performativa: messages.timeline.branchLabels.performativa,
};

export const groupOrder: PoemGroup[] = ["manifesto", "ciclo", "frammenti"];

export const labelPlacementOffsets = [
  { x: 0, y: 0 },
  { x: 0, y: -16 },
  { x: 0, y: 16 },
  { x: 24, y: -12 },
  { x: -24, y: -12 },
  { x: 24, y: 12 },
  { x: -24, y: 12 },
  { x: 0, y: -30 },
  { x: 0, y: 30 },
];

export const rectanglesOverlap = (
  first: LabelRect,
  second: LabelRect,
  gap: number,
) =>
  !(
    first.right + gap < second.left ||
    first.left > second.right + gap ||
    first.bottom + gap < second.top ||
    first.top > second.bottom + gap
  );

export const createPoemGeometry = (
  group: PoemGroup,
  trackGeometry: TrackGeometry,
) => {
  if (group === "manifesto") {
    return trackGeometry(new THREE.BoxGeometry(0.18, 0.18, 0.18));
  }

  if (group === "frammenti") {
    return trackGeometry(new THREE.TetrahedronGeometry(0.15));
  }

  return trackGeometry(new THREE.SphereGeometry(0.12, 12, 12));
};

export const createRadialTexture = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext("2d");

  if (!context) {
    return null;
  }

  const gradient = context.createRadialGradient(128, 128, 18, 128, 128, 120);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.35, "rgba(180,202,255,0.56)");
  gradient.addColorStop(1, "rgba(80,106,182,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 256, 256);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
};


