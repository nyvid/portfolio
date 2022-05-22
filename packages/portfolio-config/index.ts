export const baseUrl = 'https://devizorov.com/';
export const appName = 'Viktor Devizorov';

export enum Locales {
  en = 'en',
  de = 'de',
}

export const defaultLocale = Locales.en;
export const locales = Object.keys(Locales);

export const alternateLocales = locales.map((locale) => ({
  href: baseUrl + locale + '/',
  hrefLang: locale,
}));

export enum Routes {
  INDEX = '/',
  PROJECTS = '/projects/',
  TECH_STACK = '/tech-stack/',
}

export const routes = Object.keys(Routes);
