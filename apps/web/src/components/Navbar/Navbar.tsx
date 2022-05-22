import { Contact } from '../Contact/Contact';
import { LanguageMenu } from '../LanguageMenu/LanguageMenu';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { NavElements } from './NavElements';
import { NavName } from './NavName';

export const Navbar = () => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark-light sticky -top-14 z-20 shadow-lg transition duration-200">
      <div className="container">
        <div className="flex h-14 justify-between">
          <NavName />
          <Contact />
        </div>
        <div className="flex justify-between py-2">
          <NavElements />
          <div className="flex space-x-2">
            <LanguageMenu />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};
