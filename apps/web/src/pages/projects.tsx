import { VerticalSpacingLayout } from '@/components/Layout/VerticalSpacingLayout';
import { ProjectCards } from '@/components/ProjectCards/ProjectCards';
import { SEO } from '@/components/SEO/SEO';
import { Title } from '@/components/Title/Title';
import { useI18n } from 'next-localization';

const ProjectPage = () => {
  const { t } = useI18n();
  return (
    <>
      <SEO
        title={t('sites.projects.seo.title')}
        description={t('sites.projects.seo.description')}
      />
      <VerticalSpacingLayout size="lg">
        <Title
          title={t('sites.projects.title')}
          description={t('sites.projects.description')}
        />
        <ProjectCards />
      </VerticalSpacingLayout>
    </>
  );
};

export default ProjectPage;
