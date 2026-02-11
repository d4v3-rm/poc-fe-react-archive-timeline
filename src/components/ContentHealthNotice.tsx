import { useAppSelector } from "../app/hooks";
import { selectPoeticContentHealth } from "../features/timeline/timelineSelectors";
import { supportedLocales } from "../i18n";
import { useI18n } from "../i18n/useI18n";
import "./ContentHealthNotice.scss";

export function ContentHealthNotice() {
  const contentHealth = useAppSelector(selectPoeticContentHealth);
  const { messages, t } = useI18n();

  const hasLocaleFallbackWarning =
    !contentHealth.hasFatalError &&
    Boolean(contentHealth.activeLocaleError) &&
    contentHealth.fallbackLocale !== null &&
    contentHealth.fallbackLocale !== contentHealth.activeLocale;

  if (!contentHealth.hasFatalError && !hasLocaleFallbackWarning) {
    return null;
  }

  const detailEntries = supportedLocales
    .map((locale) => ({
      locale,
      message: contentHealth.localeErrors[locale],
    }))
    .filter((entry) => Boolean(entry.message));

  const activeLocaleLabel = messages.language.options[contentHealth.activeLocale];
  const fallbackLocaleLabel = contentHealth.fallbackLocale
    ? messages.language.options[contentHealth.fallbackLocale]
    : t("contentErrors.unavailableLocale");

  return (
    <section
      className={`content-health-notice${
        contentHealth.hasFatalError
          ? " content-health-notice--fatal"
          : " content-health-notice--warning"
      }`}
      role={contentHealth.hasFatalError ? "alert" : "status"}
      aria-live="polite"
    >
      <h2>
        {contentHealth.hasFatalError
          ? t("contentErrors.fatalTitle")
          : t("contentErrors.fallbackTitle")}
      </h2>

      <p>
        {contentHealth.hasFatalError
          ? t("contentErrors.fatalDescription")
          : t("contentErrors.fallbackDescription", {
              locale: activeLocaleLabel,
              fallbackLocale: fallbackLocaleLabel,
            })}
      </p>

      {detailEntries.length > 0 ? (
        <details className="content-health-notice__details">
          <summary>{t("contentErrors.detailsLabel")}</summary>
          <ul>
            {detailEntries.map(({ locale, message }) => (
              <li key={locale}>
                <strong>{messages.language.options[locale]}:</strong>{" "}
                {message}
              </li>
            ))}
          </ul>
        </details>
      ) : null}

      {contentHealth.hasFatalError ? (
        <button onClick={() => window.location.reload()} type="button">
          {t("contentErrors.reloadButton")}
        </button>
      ) : null}
    </section>
  );
}
