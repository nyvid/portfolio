import { i18n } from '@/i18n';
import { NextApiRequest, NextApiResponse } from 'next';
import { appName, defaultLocale, locales } from 'portfolio-config';

export const getLocaleFromApi = (req: NextApiRequest) => {
  const preferLocale = req.cookies['NEXT_LOCALE'];
  if (locales.includes(preferLocale)) {
    return preferLocale;
  }

  const acceptLocales = req.headers['accept-language']?.split(';') ?? [];
  for (let i = 0; i < acceptLocales.length; i++) {
    if (locales.includes(acceptLocales[i])) {
      return acceptLocales[i];
    }
  }

  return defaultLocale;
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const locale = getLocaleFromApi(req);
  res.status(200).json({
    display: 'standalone',
    scope: '/',
    start_url: '/',
    id: '/',
    name: appName,
    short_name: appName,
    description: i18n.t('pwa.description', undefined, locale),
    theme_color: '#818cf8',
    background_color: '#ffffff',
    icons: [
      {
        src: '/static/icons/icon-180.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/static/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/static/icons/icon-256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/static/icons/icon-384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: '/static/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  });
};

export default handler;
