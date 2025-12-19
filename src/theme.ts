export type AppTheme = "dark" | "light";

export const themeStorageKey = "poetry_portal_theme";
export const defaultTheme: AppTheme = "dark";

export const isAppTheme = (value: string): value is AppTheme => {
  return value === "dark" || value === "light";
};

export const resolveInitialTheme = (): AppTheme => {
  try {
    const storedTheme = window.localStorage.getItem(themeStorageKey);
    if (storedTheme && isAppTheme(storedTheme)) {
      return storedTheme;
    }
  } catch {
    // Ignore storage access errors and use fallback strategy.
  }

  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }

  return defaultTheme;
};

export const getNextTheme = (theme: AppTheme): AppTheme => {
  return theme === "dark" ? "light" : "dark";
};
