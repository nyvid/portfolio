import { useI18n } from 'next-localization';

export const AboutCard = () => {
  const { t } = useI18n();
  return (
    <div className="card">
      <h3>{t('sites.home.aboutMe.header')}</h3>
      <p>{t('sites.home.aboutMe.description')}</p>
    </div>
  );
};
