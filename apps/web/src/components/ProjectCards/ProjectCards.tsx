import { useI18n } from 'next-localization';
import { FC } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { VerticalSpacingLayout } from '../Layout/VerticalSpacingLayout';

const data: ProjectCardProps[] = [
  {
    projectKey: 'weatherStation',
    tags: ['react', 'java', 'fullstack'],
    website: 'https://wetterstation.hs-augsburg.de/aktuell',
  },
  {
    projectKey: 'vulnItNet',
    tags: ['networking', 'it-security'],
    website:
      'https://showcase.informatik.hs-augsburg.de/wise-2020-21/vulnitnet',
  },
];

type ProjectCardProps = {
  projectKey: string;
  tags: string[];
  website?: string;
};

const ProjectCard: FC<ProjectCardProps> = ({ projectKey, tags, website }) => {
  const { t } = useI18n();

  return (
    <div className="card hover:border-primary transition">
      <div className="flex">
        <h3 className="flex-1">
          {t('sites.projects.' + projectKey + '.header')}
        </h3>
        {website && (
          <a
            className="w-30 h-30 rounded-full transition hover:-translate-y-1"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('sites.projects.websiteOf', {
              name: t('sites.projects.' + projectKey + '.header'),
            })}
          >
            <FiExternalLink className="h-7 w-7" />
          </a>
        )}
      </div>
      <p>{t('sites.projects.' + projectKey + '.description')}</p>
      <div className="mt-4 flex space-x-2">
        {tags.map((tag) => (
          <div
            className="bg-surface-light-darker dark:bg-surface-dark-lighter rounded-lg p-1 text-sm"
            key={tag}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProjectCards = () => (
  <VerticalSpacingLayout size="sm">
    {data.map((card) => (
      <ProjectCard key={card.projectKey} {...card} />
    ))}
  </VerticalSpacingLayout>
);
