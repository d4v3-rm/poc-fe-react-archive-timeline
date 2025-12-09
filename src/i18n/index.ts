import localeIt from "./locales/it.json";

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

export const messages = localeIt;

export const t = (key: string, params?: TemplateParams) => {
  const value = getByPath(messages as TranslationNode, key);

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
