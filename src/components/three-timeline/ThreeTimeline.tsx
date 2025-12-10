import { useEffect, useRef } from "react";
import type { PoeticEvent } from "../../types";
import type { AppLocale } from "../../i18n";
import { useI18n } from "../../i18n/useI18n";
import { mountThreeTimeline } from "./runtime/mountThreeTimeline";
import "./ThreeTimeline.scss";

export interface ThreeTimelineProps {
  locale: AppLocale;
  events: PoeticEvent[];
  activeEventId: string | null;
  onSelect: (event: PoeticEvent) => void;
  onHover: (event: PoeticEvent | null) => void;
}

export function ThreeTimeline({
  locale,
  events,
  activeEventId,
  onSelect,
  onHover,
}: ThreeTimelineProps) {
  const { t } = useI18n();
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
      locale,
      host,
      events,
      activeEventIdRef,
      onSelectRef,
      onHoverRef,
      focusOffsetByIdRef,
      targetOffsetRef,
    });
  }, [events, locale]);
  // #endregion

  return (
    <div
      className="three-timeline"
      ref={hostRef}
      role="img"
      aria-label={t("timeline.ariaLabel")}
    />
  );
}


