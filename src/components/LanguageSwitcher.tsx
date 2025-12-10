import { useAppDispatch } from "../app/hooks";
import { setLocale } from "../features/locale/localeSlice";
import { supportedLocales } from "../i18n";
import { useI18n } from "../i18n/useI18n";
import "./LanguageSwitcher.scss";

export function LanguageSwitcher() {
  const dispatch = useAppDispatch();
  const { locale, messages, t } = useI18n();

  return (
    <aside className="language-switcher" aria-label={t("language.selectorAriaLabel")}>
      <div className="language-switcher__list">
        {supportedLocales.map((item) => (
          <button
            key={item}
            type="button"
            className={`language-switcher__item${locale === item ? " is-active" : ""}`}
            onClick={() => dispatch(setLocale(item))}
            aria-pressed={locale === item}
          >
            {messages.language.options[item]}
          </button>
        ))}
      </div>
    </aside>
  );
}
