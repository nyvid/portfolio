import { AboutCard } from '@/components/AboutCard/AboutCard';
import { CVCard } from '@/components/CVCard/CVCard';
import { VerticalSpacingLayout } from '@/components/Layout/VerticalSpacingLayout';
import { ProfileIcon } from '@/components/ProfileIcon/ProfileIcon';
import { SEO } from '@/components/SEO/SEO';
import { Title } from '@/components/Title/Title';
import type { NextPage } from 'next';
import { useI18n } from 'next-localization';

const Home: NextPage = () => {
  const { t } = useI18n();

  return (
    <>
      <SEO
        title={t('sites.home.seo.title')}
        description={t('sites.home.seo.description')}
      />
      <VerticalSpacingLayout size="lg">
        <ProfileIcon />
        <Title
          title={t('sites.home.title')}
          description={t('sites.home.description')}
        />
        <VerticalSpacingLayout size="sm">
          <AboutCard />
          <CVCard />
        </VerticalSpacingLayout>
      </VerticalSpacingLayout>
    </>
  );
};

export default Home;
