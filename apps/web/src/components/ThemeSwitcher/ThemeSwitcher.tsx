import { useI18n } from 'next-localization';
import { IoMoon, IoSunny } from 'react-icons/io5';

const toggleTheme = () => {
  const isDark = document.documentElement.classList.contains('dark');
  if (isDark) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
  try {
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  } catch (_) {}
};

export const ThemeSwitcher = () => {
  const { t } = useI18n();
  return (
    <button
      className="icon-btn"
      aria-label={t('theme.switch')}
      onClick={toggleTheme}
    >
      <IoSunny className="dark:hidden" />
      <IoMoon className="hidden dark:inline" />
    </button>
  );
};
