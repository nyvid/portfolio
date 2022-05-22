import { useI18n } from 'next-localization';
import { AnchorHTMLAttributes, FC } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

type ContactItemProps = Required<
  Pick<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'aria-label' | 'title' | 'href' | 'children'
  >
>;

const ContactItem: FC<ContactItemProps> = (props) => (
  <a
    className="icon-btn"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  />
);

export const Contact = () => {
  const { t } = useI18n();
  return (
    <div className="flex items-center space-x-2">
      <ContactItem
        href="https://github.com/nyvid/"
        aria-label={t('contact.github')}
        title={t('contact.github')}
      >
        <FaGithub />
      </ContactItem>
      <ContactItem
        href="https://www.linkedin.com/in/viktor-devizorov/"
        aria-label={t('contact.linkedIn')}
        title={t('contact.linkedIn')}
      >
        <FaLinkedin />
      </ContactItem>
      <ContactItem
        href="mailto:viktor.devizorov@gmail.com"
        aria-label={t('contact.email')}
        title="viktor.devizorov@gmail.com"
      >
        <MdEmail />
      </ContactItem>
    </div>
  );
};
