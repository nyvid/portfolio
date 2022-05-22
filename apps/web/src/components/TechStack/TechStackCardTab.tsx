import { Menu } from '@headlessui/react';
import { useI18n } from 'next-localization';
import {
  Dispatch,
  FC,
  forwardRef,
  HTMLAttributes,
  SetStateAction,
} from 'react';
import { BiCategory } from 'react-icons/bi';
import { TechStackCategory } from './TechStackCard';

type MobileChangeMenuItemProps = HTMLAttributes<HTMLLIElement> & {
  category: string;
};

const MobileChangeMenuItem = forwardRef<
  HTMLLIElement,
  MobileChangeMenuItemProps
>(({ category, ...other }, ref) => {
  const { t } = useI18n();
  return (
    <li ref={ref} {...other}>
      {t('sites.techStack.categories.' + category)}
    </li>
  );
});

const MobileChangeMenu: FC<TechStackCardTabProps> = ({
  techStackCategory,
  setTechStackCategory,
}) => {
  return (
    <Menu as="div" className="menu z-10 md:hidden">
      <Menu.Button className="icon-btn">
        <BiCategory />
      </Menu.Button>
      <Menu.Items as="ul" className="w-72 origin-top-left">
        {Object.values(TechStackCategory).map((category) => (
          <Menu.Item key={category}>
            {({ active }) => (
              <MobileChangeMenuItem
                onClick={() => setTechStackCategory(category)}
                category={category}
                data-selected={category === techStackCategory}
                data-active={active}
              />
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

type TechStackCardTabProps = {
  techStackCategory: TechStackCategory;
  setTechStackCategory: Dispatch<SetStateAction<TechStackCategory>>;
};

export const TechStackCardTab: FC<TechStackCardTabProps> = ({
  techStackCategory,
  setTechStackCategory,
}) => {
  const { t } = useI18n();

  return (
    <>
      <MobileChangeMenu
        setTechStackCategory={setTechStackCategory}
        techStackCategory={techStackCategory}
      />
      <div className="horizontal-tab border-surface-light-darker dark:border-surface-dark-lighter hidden border p-2 md:flex">
        {Object.values(TechStackCategory).map((category) => (
          <button
            className="w-full"
            key={category}
            onClick={() => setTechStackCategory(category)}
            data-selected={category === techStackCategory}
          >
            {t('sites.techStack.categories.' + category)}
          </button>
        ))}
      </div>
    </>
  );
};
