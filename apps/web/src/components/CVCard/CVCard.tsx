import { useI18n } from 'next-localization';
import { FC } from 'react';

type CVCardSectionProps = {
  title: string;
  entries: { key: string; value: string }[];
};

const CVCardSection: FC<CVCardSectionProps> = ({ title, entries }) => {
  return (
    <div>
      <h4 className="mb-1 mt-4 text-xl font-bold">{title}</h4>
      <ul className="marker:text-primary list-inside list-disc">
        {entries.map(({ key, value }, index) => (
          <li key={index}>
            <strong>{key}: </strong>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

const useCVCardData = (): CVCardSectionProps[] => {
  const { t } = useI18n();
  return [
    {
      title: t('sites.home.cv.personalData.header') + ' 👨',
      entries: [
        { key: 'Name', value: 'Viktor Devizorov' },
        {
          key: t('sites.home.cv.personalData.location.key'),
          value: t('sites.home.cv.personalData.location.value'),
        },
        { key: 'E-Mail', value: 'viktor.devizorov@gmail.com' },
        {
          key: t('sites.home.cv.personalData.birthdate.name'),
          value: '17.08.1999',
        },
      ],
    },
    {
      title: t('sites.home.cv.workExperience.header') + ' 👨‍💻',
      entries: [
        {
          key: t('sites.home.cv.workExperience.key'),
          value: t('sites.home.cv.workExperience.value'),
        },
      ],
    },
    {
      title: t('sites.home.cv.education.header') + ' 👨‍🎓',
      entries: [
        {
          key: t('sites.home.cv.education.bachelor.key'),
          value: t('sites.home.cv.education.bachelor.value'),
        },
        {
          key: t('sites.home.cv.education.fos.key'),
          value: t('sites.home.cv.education.fos.value'),
        },
      ],
    },
    {
      title: t('sites.home.cv.languages.header') + ' 💬',
      entries: [
        {
          key: t('sites.home.cv.languages.german.key'),
          value: t('sites.home.cv.languages.german.value'),
        },
        { key: t('sites.home.cv.languages.english.key'), value: 'B' },
      ],
    },
  ];
};

export const CVCard = () => {
  const { t } = useI18n();
  const data = useCVCardData();

  return (
    <div className="card">
      <h3>{t('sites.home.cv.header')}</h3>
      {data.map((section, index) => (
        <CVCardSection key={index} {...section} />
      ))}
    </div>
  );
};
