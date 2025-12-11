import { useAppDispatch } from "../app/hooks";
import { setLocale } from "../features/locale/localeSlice";
import { supportedLocales, type AppLocale } from "../i18n";
import { useI18n } from "../i18n/useI18n";
import "./LanguageSwitcher.scss";

const localeFlags: Record<AppLocale, string> = {
  it: "\uD83C\uDDEE\uD83C\uDDF9",
  en: "\uD83C\uDDEC\uD83C\uDDE7",
};

export function LanguageSwitcher() {
  const dispatch = useAppDispatch();
  const { locale, messages, t } = useI18n();

  return (
    <aside
      className="language-switcher"
      aria-label={t("language.selectorAriaLabel")}
    >
      <div className="language-switcher__control">
        <select
          className="language-switcher__select"
          aria-label={t("language.selectorAriaLabel")}
          value={locale}
          onChange={(event) =>
            dispatch(setLocale(event.currentTarget.value as AppLocale))
          }
          title={messages.language.options[locale]}
        >
          {supportedLocales.map((item) => (
            <option
              key={item}
              value={item}
              aria-label={messages.language.options[item]}
            >
              {localeFlags[item]}
            </option>
          ))}
        </select>
        <span className="language-switcher__caret" aria-hidden="true">
          v
        </span>
      </div>
    </aside>
  );
}
