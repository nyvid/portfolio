/** @type {import('next-sitemap').IConfig} */

const { alternateLocales, baseUrl } = require('portfolio-config');

module.exports = {
  siteUrl: baseUrl,
  generateRobotsTxt: true,
  alternateRefs: alternateLocales.map((e) => ({
    href: e.href,
    hreflang: e.hrefLang,
  })),
};
