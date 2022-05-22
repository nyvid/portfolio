import { Menu } from '@headlessui/react';
import { useI18n } from 'next-localization';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Routes } from 'portfolio-config';
import { forwardRef, HTMLAttributes } from 'react';
import { MdOutlineMenu } from 'react-icons/md';

type NavElementItemProps = HTMLAttributes<HTMLAnchorElement> & {
  route: string;
};

const NavElementItem = forwardRef<HTMLAnchorElement, NavElementItemProps>(
  ({ route, ...other }, ref) => {
    const router = useRouter();
    const { t } = useI18n();

    return (
      <Link passHref href={route}>
        <a ref={ref} data-selected={route === router.asPath} {...other}>
          {t('navbar.items.' + route)}
        </a>
      </Link>
    );
  }
);

const NavHamburgerHeadless = () => {
  const { t } = useI18n();
  return (
    <Menu as="div" className="menu sm:hidden">
      <Menu.Button className="icon-btn" aria-label={t('navbar.openMenu')}>
        <MdOutlineMenu />
      </Menu.Button>
      <Menu.Items as="nav" className="w-40 origin-top-left">
        {Object.values(Routes).map((route) => (
          <Menu.Item key={route}>
            {({ active }) => (
              <NavElementItem route={route} data-active={active} />
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export const NavElements = () => {
  return (
    <>
      <NavHamburgerHeadless />
      <nav className="horizontal-tab hidden sm:flex">
        {Object.values(Routes).map((route) => (
          <NavElementItem key={route} route={route} />
        ))}
      </nav>
    </>
  );
};
