/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const { locales, defaultLocale, Routes } = require('portfolio-config');

const removeDoubleSlash = (s) => s.replace(/([^:]\/)\/+/g, '$1');

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales,
    defaultLocale,
  },
  trailingSlash: true,
  experimental: {
    optimizeCss: true,
  },
  webpack: (config, { buildId, dir, dev, isServer }) => {
    if (!isServer && !dev) {
      const pages = Object.values(Routes);
      pages.push(
        ...[
          locales.flatMap((locale) =>
            pages.map((url) => removeDoubleSlash('/' + locale + url))
          ),
        ].flat()
      );

      config.plugins.push(
        new InjectManifest({
          swDest: path.join(dir, 'public', 'sw.js'),
          swSrc: path.join(dir, 'worker', 'index.js'),
          additionalManifestEntries: pages.map((entry) => ({
            url: entry,
            revision: buildId,
          })),
          modifyURLPrefix: {
            [config.output.publicPath]: '/_next/',
          },
          exclude: [
            'build-manifest.json',
            'react-loadable-manifest.json',
            'server/',
          ],
          manifestTransforms: [
            async (manifestEntries) => {
              const manifest = manifestEntries.map((m) => {
                m.revision = buildId;
                return m;
              });
              return { manifest };
            },
          ],
        })
      );
    }
    return config;
  },
});

module.exports = nextConfig;
