import { AnimatePresence, m } from 'framer-motion';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren, useEffect, useState } from 'react';

export const FullPageTransition: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <m.div
        key={router.asPath}
        initial={
          shouldAnimate && {
            translateY: '-5%',
            opacity: 0,
          }
        }
        animate={{
          translateY: '0%',
          opacity: 1,
        }}
        exit={{
          translateY: '-5%',
          opacity: 0,
        }}
        transition={{
          type: 'tween',
        }}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
};
