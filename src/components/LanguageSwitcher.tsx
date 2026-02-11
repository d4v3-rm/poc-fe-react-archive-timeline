import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { setLocale } from "../features/locale/localeSlice";
import { supportedLocales, type AppLocale } from "../i18n";
import { useI18n } from "../i18n/useI18n";
import "./LanguageSwitcher.scss";

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const controlRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const { locale, messages, t } = useI18n();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (!controlRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleLocaleSelection = (nextLocale: AppLocale) => {
    dispatch(setLocale(nextLocale));
    setIsOpen(false);
  };

  const currentLocaleLabel = messages.language.options[locale];

  return (
    <aside
      className="language-switcher"
      aria-label={t("language.selectorAriaLabel")}
    >
      <div className="language-switcher__control" ref={controlRef}>
        <button
          className="language-switcher__select"
          type="button"
          aria-label={t("language.selectorAriaLabel")}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          title={currentLocaleLabel}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span
            className={`language-switcher__flag language-switcher__flag--${locale}`}
            aria-hidden="true"
          />
        </button>
        <span className="language-switcher__caret" aria-hidden="true" />
        <div
          className={`language-switcher__menu${isOpen ? " is-open" : ""}`}
          role="listbox"
          aria-label={t("language.selectorAriaLabel")}
          aria-hidden={!isOpen}
        >
          {supportedLocales.map((item) => (
            <button
              key={item}
              className={`language-switcher__option${
                item === locale ? " is-active" : ""
              }`}
              type="button"
              role="option"
              aria-selected={item === locale}
              aria-label={messages.language.options[item]}
              title={messages.language.options[item]}
              onClick={() => handleLocaleSelection(item)}
            >
              <span
                className={`language-switcher__flag language-switcher__flag--${item}`}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
