import Image from 'next/image';
import { FC } from 'react';

export enum TechStackCategory {
  ALL = 'all',
  WEB = 'web',
  LANG = 'lang',
  DEVOPS = 'devops',
}

export type TechStackCardProps = {
  name: string;
  backgroundColor: string;
  category: TechStackCategory[];
  iconSrc: string;
};

export const TechStackCard: FC<TechStackCardProps> = ({
  name,
  backgroundColor,
  iconSrc,
}) => {
  return (
    <div className="border-surface-light-darker bg-surface-light dark:border-surface-dark-lighter dark:bg-surface-dark-light flex items-center space-x-4 rounded-lg border p-4 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="h-11 w-11 rounded-lg" style={{ backgroundColor }}>
        <div className="h-11 w-11 p-2">
          <div className="h-7 w-7">
            <Image
              src={iconSrc}
              alt=""
              layout="responsive"
              height={1}
              width={1}
            />
          </div>
        </div>
      </div>
      <p className="font-bold">{name}</p>
    </div>
  );
};
