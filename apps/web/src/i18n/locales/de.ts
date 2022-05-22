import { TechStackCategory } from '@/components/TechStack/TechStackCard';
import { Routes } from 'portfolio-config';
import { Locale } from '..';

export const de: Locale = {
  hello: 'Hallo Welt',
  contact: {
    github: 'Github Account',
    linkedIn: 'LinkedIn Account',
    email: 'Email Adresse',
  },
  navbar: {
    home: 'Startseite',
    items: {
      [Routes.INDEX]: 'Startseite',
      [Routes.PROJECTS]: 'Projekte',
      [Routes.TECH_STACK]: 'Tech Stack',
    },
    openMenu: 'Menü öffnen',
  },
  theme: {
    switch: 'Farbmodus wechseln',
  },
  language: {
    switch: 'Sprache ändern',
    en: 'Englisch',
    de: 'Deutsch',
  },
  sites: {
    home: {
      seo: {
        title: 'Startseite',
        description:
          'Auf Jobsuche | Junior | Fullstack | Frontend | Backend. Ein Portfolio von Viktor Devizorov.',
      },
      title: 'Hey, ich bin Viktor! 👋',
      description:
        'Ich bin auf der Suche nach einem Job, um meine Karrerie als Junior Fullstack-, Frontend oder Backendentwickler (Augsburg oder 100 % Remote) zu starten.',
      aboutMe: {
        header: 'Über mich',
        description:
          'Nachdem ich in der Schule erste Erfahrungen mit C++ sammeln konnte, habe ich ein Informatikstudium begonnen. Im Studium habe ich die Webentwicklung kennengelernt und habe mich daraufhin besonders für die Cross-Plattform Entwicklung mit Progressive Web Apps interessiert. In meiner Freizeit interessiere ich mich außerdem für die Spieleentwicklung mit Webtechnologien. Meine größten Kenntnisse habe ich im Bereich React und NodeJS mit den Programmiersprachen JavaScript und TypeScript. Diese Kenntnisse möchte ich gerne in meinem nächsten Job weiter ausbauen, bin aber auch für neue Erfahrungen offen wie zum Beispiel Angular/Svelte oder andere Kenntnisse in denen ich aktuell nur Grundlagen habe, wie in der Programmiersprache Golang. 🙂',
      },
      cv: {
        header: 'Lebenslauf',
        personalData: {
          header: 'Persönliche Daten',
          name: { value: 'Viktor Devizorov', key: 'Name' },
          location: { key: 'Wohnort', value: 'Augsburg, Deutschland' },
          birthdate: {
            name: 'Geburtsdatum',
          },
        },
        workExperience: {
          header: 'Berufserfahrung',
          key: 'März 2021 - Juli 2021',
          value: 'Praktikum Software Entwicklung, Secomba GmbH',
        },
        education: {
          header: 'Ausbildung',
          bachelor: {
            key: 'Oktober 2018 - Mai 2022',
            value:
              'Informatik (B. Sc.), Hochschule Augsburg, Abschlussnote: 1.9',
          },
          fos: {
            key: 'September 2015 - Juli 2018',
            value: 'Fachhochschulreife, FOS BOS Augsburg, Fachrichtung Technik',
          },
        },
        languages: {
          header: 'Sprachen',
          german: {
            key: 'Deutsch',
            value: 'Muttersprache',
          },
          english: {
            key: 'Englisch',
            value: 'B',
          },
        },
      },
    },
    projects: {
      seo: {
        title: 'Projekte',
        description:
          'Auf dieser Seite findest du einige meiner Projekte an denen ich beteiligt war und was ich dabei gelernt habe.',
      },
      title: 'Projekte',
      description:
        'Das ist eine Liste von einigen Projekten an denen ich beteiligt war.',
      websiteOf: 'Webseite von {{name}}',
      weatherStation: {
        header: 'Wetterstation Hochschule Augsburg ☀☁',
        description:
          'Neuentwicklung des Front- und Backends der Wetterstation von der Hochschule Augsburg. In diesem Projekt habe ich erste Kenntnisse in der Webentwicklung erlernt. Dazu gehört React, CSS, HTML, aber auch die Funktionalität einer REST API und auch die Entwicklung einer REST API mithilfe von Java. Zusätzlich war es notwendig den Server auf eine neuere Version upzugraden, dazu war es notwendig eine SQL Datenbank und einen Webserver unter Linux aufzusetzen.',
      },
      vulnItNet: {
        header: 'VulnITNet 🔒🕵',
        description:
          'Ziel dieses Projekts, war die Erstellung von virtuellen Maschinen, um typische Angriffe in einem Netzwerk zu demonstrieren. Dazu wurden folgende Tools verwendet: Vagrant zur Erstellung und Verwaltung von virtuellen Maschinen, nmap, Metsploit. Gearbeitet wurde vorallem mit Injektion Schwachstellen und Bruteforce Methoden. Dieses Projekt war für mich sehr nützlich, um das Networking unter Linux zu lernen und um ein besseres Verständnis dafür zu erhalten, wie Schwachstellen verhindert werden können.',
      },
    },
    techStack: {
      seo: {
        title: 'Tech Stack',
        description:
          'Auf dieser Seite findest du eine Liste von verschiedenen Technologien, die ich aktiv benutze, oder gelernt habe und gerne weiter ausbauen möchte.',
      },
      title: 'Tech Stack',
      description:
        'Das ist eine Liste von verschiedenen Technologien die ich mir während meinem Studium angeeignet habe.',
      categories: {
        [TechStackCategory.DEVOPS]: 'DevOps',
        [TechStackCategory.WEB]: 'Webentwicklung',
        [TechStackCategory.LANG]: 'Programmiersprachen',
        [TechStackCategory.ALL]: 'Alle',
      },
      category: 'Kategorie',
    },
  },
  pwa: {
    description: 'Ein Portfolio von Viktor Devizorov.',
  },
};
