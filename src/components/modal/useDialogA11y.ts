import { useEffect } from "react";
import type { RefObject } from "react";

interface UseDialogA11yOptions {
  isOpen: boolean;
  dialogRef: RefObject<HTMLElement | null>;
  onRequestClose: () => void;
  initialFocusSelector?: string;
}

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

const resolveFocusableElements = (dialog: HTMLElement) =>
  Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector)).filter(
    (element) => !element.hasAttribute("disabled"),
  );

const focusDialog = (dialog: HTMLElement) => {
  if (!dialog.hasAttribute("tabindex")) {
    dialog.setAttribute("tabindex", "-1");
  }

  dialog.focus();
};

export const useDialogA11y = ({
  isOpen,
  dialogRef,
  onRequestClose,
  initialFocusSelector,
}: UseDialogA11yOptions) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    const previouslyFocused =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const focusFirstElement = () => {
      if (initialFocusSelector) {
        const preferredElement =
          dialog.querySelector<HTMLElement>(initialFocusSelector);
        if (preferredElement) {
          preferredElement.focus();
          return;
        }
      }

      const focusableElements = resolveFocusableElements(dialog);
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
        return;
      }

      focusDialog(dialog);
    };

    focusFirstElement();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onRequestClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = resolveFocusableElements(dialog);

      if (focusableElements.length === 0) {
        event.preventDefault();
        focusDialog(dialog);
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;

      if (event.shiftKey) {
        if (!activeElement || activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
        return;
      }

      if (!activeElement || activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }

      if (!dialog.contains(target)) {
        focusFirstElement();
      }
    };

    dialog.addEventListener("keydown", handleKeyDown);
    document.addEventListener("focusin", handleFocusIn);

    return () => {
      dialog.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("focusin", handleFocusIn);

      if (previouslyFocused?.isConnected) {
        previouslyFocused.focus();
      }
    };
  }, [dialogRef, initialFocusSelector, isOpen, onRequestClose]);
};
