import * as THREE from "three";
import type { PoeticBranch, PoeticEvent } from "../../../types";
import { branchStyles } from "./constants";
import type { ProjectionRuntime } from "./types";

const spacing = 6.05;

// #region Projection
export const createProjectionRuntime = (
  events: PoeticEvent[],
): ProjectionRuntime => {
  const centerOffset = (Math.max(events.length - 1, 0) * spacing) / 2;

  const points = events.map((event, index) => {
    const branchStyle = branchStyles[event.branch];
    const wave = index * 0.56 + branchStyle.phase;

    return new THREE.Vector3(
      branchStyle.offsetX + Math.sin(wave) * 1.25,
      branchStyle.offsetY + Math.cos(wave * 0.84) * 0.9,
      index * spacing - centerOffset,
    );
  });

  const focusOffsets = points.map((point) => -point.z);
  const minOffset =
    focusOffsets.length > 0 ? Math.min(...focusOffsets) - 4.2 : -12;
  const maxOffset = focusOffsets.length > 0 ? Math.max(...focusOffsets) + 4.2 : 12;

  const focusOffsetById = new Map<string, number>();

  events.forEach((event, index) => {
    focusOffsetById.set(
      event.id,
      THREE.MathUtils.clamp(-points[index].z, minOffset, maxOffset),
    );
  });

  const branchIndices = new Map<PoeticBranch, number[]>();

  events.forEach((event, index) => {
    const list = branchIndices.get(event.branch) ?? [];
    list.push(index);
    branchIndices.set(event.branch, list);
  });

  const eventById = new Map(events.map((event) => [event.id, event]));
  const pointById = new Map(events.map((event, index) => [event.id, points[index]]));

  return {
    points,
    minOffset,
    maxOffset,
    branchIndices,
    eventById,
    pointById,
    focusOffsetById,
  };
};
// #endregion



