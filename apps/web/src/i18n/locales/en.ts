import { TechStackCategory } from '@/components/TechStack/TechStackCard';
import { Routes } from 'portfolio-config';
import { Locale } from '..';

export const en: Locale = {
  hello: 'Hello World',
  contact: {
    github: 'Github account',
    linkedIn: 'LinkedIn account',
    email: 'Email adress',
  },
  navbar: {
    home: 'homepage',
    items: {
      [Routes.INDEX]: 'Home',
      [Routes.PROJECTS]: 'Projects',
      [Routes.TECH_STACK]: 'Tech Stack',
    },
    openMenu: 'open menu',
  },
  theme: {
    switch: 'change theme',
  },
  language: {
    switch: 'change language',
    de: 'German',
    en: 'English',
  },
  sites: {
    home: {
      seo: {
        title: 'Home',
        description:
          'Open to work | Junior | Fullstack | Frontend | Backend. A portfolio from Viktor Devizorov.',
      },
      title: "Hey, I'm Viktor! 👋",
      description:
        'I am looking for a job to start my career as a junior  fullstack, frontend or backend developer (Augsburg or 100% remote).',
      aboutMe: {
        header: 'About me',
        description:
          'After gaining some experience with C++ at school, I started studying computer science. During my studies I got to know web development and became especially interested in cross-platform development with Progressive Web Apps. In my free time I am also interested in game development with web technologies. My greatest knowledge is in React and NodeJS with the JavaScript and TypeScript programming languages. I would like to expand this knowledge in my next job, but I am also open for new things like Angular/Svelte or other knowledge in which I currently only have basics, like the programming language Golang. 🙂',
      },
      cv: {
        header: 'CV',
        personalData: {
          header: 'Personal data',
          name: { value: 'Viktor Devizorov', key: 'Name' },
          location: { key: 'Location', value: 'Augsburg, Germany' },
          birthdate: {
            name: 'Birthdate',
          },
        },
        workExperience: {
          header: 'Work experience',
          key: 'March 2021 - July 2021',
          value: 'Internship Software Development, Secomba GmbH',
        },
        education: {
          header: 'Education',
          bachelor: {
            key: 'October 2018 - May 2022',
            value:
              'Computer Science (B. Sc.), University of Applied Sciences Augsburg, final grade: 1.9',
          },
          fos: {
            key: 'September 2015 - July 2018',
            value: 'Fachhochschulreife, FOS BOS Augsburg, technical field',
          },
        },
        languages: {
          header: 'Languages',
          german: {
            key: 'German',
            value: 'native language',
          },
          english: {
            key: 'English',
            value: 'B',
          },
        },
      },
    },
    projects: {
      seo: {
        title: 'Projects',
        description:
          'On this page you will find some of the projects I have been involved in and what I have learned.',
      },
      title: 'Projects',
      description:
        'This is a list of some of the projects I have been involved in.',

      websiteOf: 'Website of {{name}}',
      weatherStation: {
        header: 'Weather station - University of Applied Sciences Augsburg ☀☁',
        description:
          'New development of the front- and backend of the weather station from the University of Applied Sciences Augsburg. In this project I was able to learn first skills in web development. This includes React, CSS, HTML, but also the functionality of a REST API and also the development of a REST API using Java. In addition, it was necessary to upgrade the server to a newer version, for this it was necessary to set up a SQL database and a web server under Linux.',
      },
      vulnItNet: {
        header: 'VulnITNet 🔒🕵',
        description:
          'The goal of this project was to create virtual machines to demonstrate typical attacks in a network. The following tools were used for this purpose: Vagrant to create and manage virtual machines, nmap, Metsploit. We worked mainly with injection vulnerabilities and bruteforce methods. This project was very useful for me to learn networking on Linux and to get a better understanding of how to prevent vulnerabilities.',
      },
    },
    techStack: {
      seo: {
        title: 'Tech Stack',
        description:
          'On this page you will find a list of different technologies that I am actively using, or have learned and would like to expand on.',
      },
      title: 'Tech Stack',
      description:
        'This is a list of different technologies I acquired during my studies.',

      categories: {
        [TechStackCategory.DEVOPS]: 'DevOps',
        [TechStackCategory.WEB]: 'Web development',
        [TechStackCategory.LANG]: 'Programming language',
        [TechStackCategory.ALL]: 'All',
      },
      category: 'Category',
    },
  },
  pwa: {
    description: 'A portfolio from Viktor Devizorov.',
  },
};
