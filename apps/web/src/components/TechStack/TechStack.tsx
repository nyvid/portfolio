import { VerticalSpacingLayout } from '@/components/Layout/VerticalSpacingLayout';
import {
  TechStackCard,
  TechStackCardProps,
  TechStackCategory,
} from '@/components/TechStack/TechStackCard';
import { TechStackCardTab } from '@/components/TechStack/TechStackCardTab';
import { useState } from 'react';

const techStackData: TechStackCardProps[] = [
  {
    name: 'JavaScript',
    backgroundColor: '#fef9c3',
    iconSrc: '/static/logos/javascript.svg',
    category: [TechStackCategory.LANG],
  },
  {
    name: 'Go',
    backgroundColor: '#dbeafe',
    iconSrc: '/static/logos/gopher.svg',
    category: [TechStackCategory.LANG],
  },
  {
    name: 'Java',
    backgroundColor: '#ffedd5',
    iconSrc: '/static/logos/java.svg',
    category: [TechStackCategory.LANG],
  },
  {
    name: 'React',
    backgroundColor: '#e0f2fe',
    iconSrc: '/static/logos/react.svg',
    category: [TechStackCategory.WEB],
  },
  {
    name: 'CSS',
    backgroundColor: '#bfdbfe',
    iconSrc: '/static/logos/css-3.svg',
    category: [TechStackCategory.WEB],
  },
  {
    name: 'Docker',
    backgroundColor: '#e0f2fe',
    iconSrc: '/static/logos/docker-icon.svg',
    category: [TechStackCategory.DEVOPS],
  },
  {
    name: 'HTML',
    backgroundColor: '#fed7aa',
    iconSrc: '/static/logos/html-5.svg',
    category: [TechStackCategory.WEB],
  },
  {
    name: 'Kotlin',
    backgroundColor: '#e9d5ff',
    iconSrc: '/static/logos/kotlin-icon.svg',
    category: [TechStackCategory.LANG],
  },
  {
    name: 'NestJS',
    backgroundColor: '#fee2e2',
    iconSrc: '/static/logos/nestjs.svg',
    category: [TechStackCategory.WEB],
  },
  {
    name: 'Next.js',
    backgroundColor: '#e5e7eb',
    iconSrc: '/static/logos/nextjs.svg',
    category: [TechStackCategory.WEB],
  },
  {
    name: 'Nginx',
    backgroundColor: '#bbf7d0',
    iconSrc: '/static/logos/nginx.svg',
    category: [TechStackCategory.DEVOPS],
  },
  {
    name: 'NodeJS',
    backgroundColor: '#dcfce7',
    iconSrc: '/static/logos/nodejs-icon.svg',
    category: [TechStackCategory.WEB],
  },
  {
    name: 'Nx',
    backgroundColor: '#dbeafe',
    iconSrc: '/static/logos/nx.svg',
    category: [TechStackCategory.DEVOPS],
  },
  {
    name: 'PostgreSQL',
    backgroundColor: '#bfdbfe',
    iconSrc: '/static/logos/postgresql.svg',
    category: [TechStackCategory.WEB],
  },
  {
    name: 'Progressive Web App',
    backgroundColor: '#ede9fe',
    iconSrc: '/static/logos/pwa.svg',
    category: [TechStackCategory.WEB],
  },
  {
    name: 'Python',
    backgroundColor: '#dbeafe',
    iconSrc: '/static/logos/python.svg',
    category: [TechStackCategory.LANG],
  },
  {
    name: 'Tailwind CSS',
    backgroundColor: '#cffafe',
    iconSrc: '/static/logos/tailwindcss-icon.svg',
    category: [TechStackCategory.WEB],
  },
  {
    name: 'TypeScript',
    backgroundColor: '#dbeafe',
    iconSrc: '/static/logos/typescript-icon.svg',
    category: [TechStackCategory.LANG],
  },
  {
    name: 'Vue',
    backgroundColor: '#ccfbf1',
    iconSrc: '/static/logos/vue.svg',
    category: [TechStackCategory.WEB],
  },
];

export const TechStack = () => {
  const [techStackCategory, setTechStackCategory] = useState<TechStackCategory>(
    TechStackCategory.ALL
  );

  return (
    <VerticalSpacingLayout size="sm">
      <TechStackCardTab
        techStackCategory={techStackCategory}
        setTechStackCategory={setTechStackCategory}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {techStackData
          .filter(
            (card) =>
              techStackCategory === TechStackCategory.ALL ||
              card.category.includes(techStackCategory)
          )
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((card) => (
            <TechStackCard key={card.name} {...card} />
          ))}
      </div>
    </VerticalSpacingLayout>
  );
};
