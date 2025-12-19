import { useI18n } from "../i18n/useI18n";
import type { AppTheme } from "../theme";
import { getNextTheme } from "../theme";
import "./ThemeToggle.scss";

interface ThemeToggleProps {
  theme: AppTheme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const { t } = useI18n();
  const nextTheme = getNextTheme(theme);
  const label =
    nextTheme === "light" ? t("theme.switchToLight") : t("theme.switchToDark");

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={label}
      title={label}
      onClick={onToggle}
    >
      <span aria-hidden="true">{theme === "light" ? "\u263e" : "\u2600"}</span>
    </button>
  );
}
