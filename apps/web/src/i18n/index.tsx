import { TechStackCategory } from '@/components/TechStack/TechStackCard';
import { I18n } from 'next-localization';
import { Locales, Routes } from 'portfolio-config';
import { de } from './locales/de';
import { en } from './locales/en';

type SiteMeta = {
  title: string;
  description: string;
};

export type Locale = {
  hello: string;
  contact: {
    github: string;
    linkedIn: string;
    email: string;
  };
  navbar: {
    home: string;
    items: Record<Routes, string>;
    openMenu: string;
  };
  theme: {
    switch: string;
  };
  language: {
    switch: string;
  } & Record<Locales, string>;
  sites: {
    home: {
      seo: SiteMeta;
      title: string;
      description: string;
      aboutMe: {
        header: string;
        description: string;
      };
      cv: {
        header: string;
        personalData: {
          header: string;
          name: {
            key: string;
            value: string;
          };
          location: {
            key: string;
            value: string;
          };
          birthdate: {
            name: string;
          };
        };
        workExperience: {
          header: string;
          key: string;
          value: string;
        };
        education: {
          header: string;
          bachelor: {
            key: string;
            value: string;
          };
          fos: {
            key: string;
            value: string;
          };
        };
        languages: {
          header: string;
          german: {
            key: string;
            value: string;
          };
          english: {
            key: string;
            value: string;
          };
        };
      };
    };
    projects: {
      seo: SiteMeta;
      title: string;
      description: string;
      websiteOf: string;
      weatherStation: {
        header: string;
        description: string;
      };
      vulnItNet: {
        header: string;
        description: string;
      };
    };
    techStack: {
      seo: SiteMeta;
      title: string;
      description: string;
      categories: Record<TechStackCategory, string>;
      category: string;
    };
  };
  pwa: {
    description: string;
  };
};

export const i18n = I18n<Record<Locales, Locale>>({
  en,
  de,
});
