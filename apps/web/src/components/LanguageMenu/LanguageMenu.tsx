import { Menu } from '@headlessui/react';
import Cookies from 'js-cookie';
import { useI18n } from 'next-localization';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { locales } from 'portfolio-config';
import { forwardRef, HTMLAttributes } from 'react';
import { IoLanguage } from 'react-icons/io5';

type LanguageMenuItemProps = HTMLAttributes<HTMLLIElement> & {
  locale: string;
};

const LanguageMenuItem = forwardRef<HTMLLIElement, LanguageMenuItemProps>(
  ({ locale, onClick, ...other }, ref) => {
    const router = useRouter();
    const { t } = useI18n();
    return (
      <Link passHref href={router.asPath} locale={locale} scroll={false}>
        <li
          ref={ref}
          data-selected={router.locale === locale}
          onClick={(e) => {
            Cookies.set('NEXT_LOCALE', locale);
            if (onClick) onClick(e);
          }}
          {...other}
        >
          {t('language.' + locale)}
        </li>
      </Link>
    );
  }
);

export const LanguageMenu = () => {
  const { t } = useI18n();

  return (
    <Menu as="div" className="menu">
      <Menu.Button className="icon-btn" aria-label={t('language.switch')}>
        <IoLanguage />
      </Menu.Button>
      <Menu.Items
        as="ul"
        className="w-32 origin-top-right -translate-x-[5.3rem]"
      >
        {locales.map((locale) => (
          <Menu.Item key={locale}>
            {({ active }) => (
              <LanguageMenuItem data-active={active} locale={locale} />
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
