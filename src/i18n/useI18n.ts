import { useMemo } from "react";
import { useAppSelector } from "../app/hooks";
import { selectLocale } from "../features/locale/localeSlice";
import { getMessages, translate } from "./index";

export const useI18n = () => {
  const locale = useAppSelector(selectLocale);

  return useMemo(
    () => ({
      locale,
      messages: getMessages(locale),
      t: (key: string, params?: Record<string, string | number>) =>
        translate(locale, key, params),
    }),
    [locale],
  );
};
