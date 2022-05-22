import Link from 'next/link';
import { appName } from 'portfolio-config';

export const NavName = () => {
  return (
    <Link href="/" passHref>
      <a className="flex items-center text-lg font-bold">{appName}</a>
    </Link>
  );
};
