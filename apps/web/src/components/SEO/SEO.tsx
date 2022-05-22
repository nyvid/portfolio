import { removeDuplicateSlashes } from '@/utils/removeDuplicateSlashes';
import { NextSeo, NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';
import { alternateLocales, appName, baseUrl } from 'portfolio-config';

const generateLanguageAlternates = (path: string) => {
  const defaultAlternate = {
    hrefLang: 'x-default',
    href: removeDuplicateSlashes(baseUrl + path),
  };
  return [...alternateLocales, defaultAlternate];
};

type SeoProps = NextSeoProps & {
  title: string;
  description: string;
};

export const SEO = ({ title, description, ...other }: SeoProps) => {
  const router = useRouter();

  return (
    <NextSeo
      title={title + ' | ' + appName}
      description={description}
      languageAlternates={generateLanguageAlternates(router.asPath)}
      canonical={baseUrl + router.locale + router.asPath}
      openGraph={{
        title: title + ' | ' + appName,
        description: description,
        url: baseUrl + router.locale + router.asPath,
        locale: router.locale,
        type: 'website',
        images: [
          {
            url: baseUrl + 'static/images/icon.webp',
            width: 2048,
            height: 2048,
            alt: 'Photo',
          },
        ],
      }}
      {...other}
    />
  );
};
