import { FullPageTransition } from '@/components/FullPageTransition/FullPageTransition';
import { Layout } from '@/components/Layout/Layout';
import { i18n } from '@/i18n';
import '@/styles/globals.css';
import { LazyMotion } from 'framer-motion';
import { I18nProvider } from 'next-localization';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { defaultLocale } from 'portfolio-config';
import { useEffect } from 'react';
import { Workbox } from 'workbox-window';

const features = () =>
  import('@/utils/framerFeature').then((mod) => mod.default);

const registerServiceWorker = async () => {
  // Do not use service worker during development to avoid caching problems
  if (process.env.NODE_ENV === 'development') return;

  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/sw.js');
    await wb.register();
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <I18nProvider i18nInstance={i18n} locale={router.locale ?? defaultLocale}>
      <Layout>
        <LazyMotion features={features} strict>
          <FullPageTransition>
            <Component {...pageProps} />
          </FullPageTransition>
        </LazyMotion>
      </Layout>
    </I18nProvider>
  );
}

export default MyApp;
