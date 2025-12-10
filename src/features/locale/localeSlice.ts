import { createSelector, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { defaultLocale, isSupportedLocale, type AppLocale } from "../../i18n";

const STORAGE_KEY = "poetry_portal_locale";

const resolveStoredLocale = (): AppLocale => {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  const storedValue = window.localStorage.getItem(STORAGE_KEY);

  if (!storedValue || !isSupportedLocale(storedValue)) {
    return defaultLocale;
  }

  return storedValue;
};

interface LocaleState {
  locale: AppLocale;
}

const initialState: LocaleState = {
  locale: resolveStoredLocale(),
};

const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    setLocale(state, action: PayloadAction<AppLocale>) {
      state.locale = action.payload;
    },
  },
});

const selectLocaleState = (state: RootState) => state.locale;

export const selectLocale = createSelector(
  [selectLocaleState],
  (localeState) => localeState.locale,
);

export const localeReducer = localeSlice.reducer;

export const { setLocale } = localeSlice.actions;

