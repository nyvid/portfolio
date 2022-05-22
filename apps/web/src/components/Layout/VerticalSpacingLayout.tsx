import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

type VerticalSpacingLayoutProps = {
  size: 'sm' | 'md' | 'lg';
};

export const VerticalSpacingLayout: FC<
  PropsWithChildren<VerticalSpacingLayoutProps>
> = ({ children, size }) => {
  return (
    <div
      className={clsx({
        'space-y-4': size === 'sm',
        'space-y-6': size === 'md',
        'space-y-8': size === 'lg',
      })}
    >
      {children}
    </div>
  );
};
