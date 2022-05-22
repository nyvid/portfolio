import { appName } from 'portfolio-config';
import { Contact } from '../Contact/Contact';

export const Footer = () => {
  return (
    <footer className="container flex items-center py-2">
      <a
        className="hover:text-primary mr-auto text-sm"
        href="https://github.com/nyvid/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        © {new Date().getFullYear()} {appName}
      </a>
      <div>
        <Contact />
      </div>
    </footer>
  );
};
