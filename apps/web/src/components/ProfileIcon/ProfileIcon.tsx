import { m } from 'framer-motion';
import Image from 'next/image';
import icon from '../../../public/static/images/icon.webp';

export const ProfileIcon = () => {
  return (
    <div className="relative mx-auto h-60 w-60 rounded-full">
      <div className="-translate-x-2.5 -translate-y-2.5">
        <m.svg
          className="animate-spin-slow h-[16.2rem] w-[16.2rem]"
          initial={{
            fill: 'none',
            stroke: '#4338ca',
            strokeWidth: 4,
            strokeDasharray: 30,
            strokeLinecap: 'round',
          }}
          animate={{
            stroke: '#818cf8',
            strokeDasharray: 1,
          }}
          transition={{
            duration: 3,
          }}
        >
          <circle cx="50%" cy="50%" r="48%" />
        </m.svg>
      </div>

      <Image
        className="rounded-full"
        src={icon}
        alt=""
        layout="fill"
        sizes="15rem"
        priority
      />
    </div>
  );
};
