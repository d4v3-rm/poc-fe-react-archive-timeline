import localeEn from "./locales/en.json";
import localeIt from "./locales/it.json";

export const supportedLocales = ["it", "en"] as const;

export type AppLocale = (typeof supportedLocales)[number];

export const defaultLocale: AppLocale = "en";

const localeMessagesMap = {
  it: localeIt,
  en: localeEn,
} as const;

export type LocaleMessages = (typeof localeMessagesMap)["en"];

type TranslationNode =
  | string
  | number
  | boolean
  | null
  | TranslationNode[]
  | { [key: string]: TranslationNode };

type TemplateParams = Record<string, string | number>;

const TEMPLATE_TOKEN_PATTERN = /\{\{(\w+)\}\}/g;

const getByPath = (source: TranslationNode, path: string) => {
  return path.split(".").reduce<TranslationNode | undefined>((node, key) => {
    if (!node || typeof node !== "object" || Array.isArray(node)) {
      return undefined;
    }

    return (node as Record<string, TranslationNode>)[key];
  }, source);
};

export const isSupportedLocale = (locale: string): locale is AppLocale => {
  return supportedLocales.includes(locale as AppLocale);
};

export const getMessages = (locale: AppLocale): LocaleMessages => {
  return localeMessagesMap[locale] ?? localeMessagesMap[defaultLocale];
};

export const translate = (
  locale: AppLocale,
  key: string,
  params?: TemplateParams,
) => {
  const value = getByPath(getMessages(locale) as TranslationNode, key);

  if (typeof value !== "string") {
    return key;
  }

  if (!params) {
    return value;
  }

  return value.replace(TEMPLATE_TOKEN_PATTERN, (_, token: string) => {
    const tokenValue = params[token];
    return tokenValue === undefined ? `{{${token}}}` : String(tokenValue);
  });
};
