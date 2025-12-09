import { useEffect, useRef } from "react";
import type { PoeticEvent } from "../../types";
import { mountThreeTimeline } from "./runtime/mountThreeTimeline";
import "./ThreeTimeline.scss";

export interface ThreeTimelineProps {
  events: PoeticEvent[];
  activeEventId: string | null;
  onSelect: (event: PoeticEvent) => void;
  onHover: (event: PoeticEvent | null) => void;
}

export function ThreeTimeline({
  events,
  activeEventId,
  onSelect,
  onHover,
}: ThreeTimelineProps) {
  // #region Mutable Runtime Refs
  const hostRef = useRef<HTMLDivElement | null>(null);
  const activeEventIdRef = useRef<string | null>(activeEventId);
  const onSelectRef = useRef(onSelect);
  const onHoverRef = useRef(onHover);
  const focusOffsetByIdRef = useRef<Map<string, number>>(new Map());
  const targetOffsetRef = useRef(0);
  // #endregion

  // #region Ref Synchronization
  useEffect(() => {
    activeEventIdRef.current = activeEventId;

    if (!activeEventId) {
      return;
    }

    const nextOffset = focusOffsetByIdRef.current.get(activeEventId);

    if (typeof nextOffset === "number") {
      targetOffsetRef.current = nextOffset;
    }
  }, [activeEventId]);

  useEffect(() => {
    onSelectRef.current = onSelect;
  }, [onSelect]);

  useEffect(() => {
    onHoverRef.current = onHover;
  }, [onHover]);
  // #endregion

  // #region 3D Runtime Mount
  useEffect(() => {
    const host = hostRef.current;

    if (!host) {
      return;
    }

    return mountThreeTimeline({
      host,
      events,
      activeEventIdRef,
      onSelectRef,
      onHoverRef,
      focusOffsetByIdRef,
      targetOffsetRef,
    });
  }, [events]);
  // #endregion

  return (
    <div
      className="three-timeline"
      ref={hostRef}
      role="img"
      aria-label="Timeline poetica tridimensionale a diramazioni"
    />
  );
}

