import { VerticalSpacingLayout } from '@/components/Layout/VerticalSpacingLayout';
import { SEO } from '@/components/SEO/SEO';
import { TechStack } from '@/components/TechStack/TechStack';
import { Title } from '@/components/Title/Title';
import { useI18n } from 'next-localization';

const TechStackPage = () => {
  const { t } = useI18n();
  return (
    <>
      <SEO
        title={t('sites.techStack.seo.title')}
        description={t('sites.techStack.seo.description')}
      />
      <VerticalSpacingLayout size="lg">
        <Title
          title={t('sites.techStack.title')}
          description={t('sites.techStack.description')}
        />
        <TechStack />
      </VerticalSpacingLayout>
    </>
  );
};

export default TechStackPage;
