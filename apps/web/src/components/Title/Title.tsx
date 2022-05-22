import { FC } from 'react';

type TitleProps = {
  title: string;
  description: string;
};

export const Title: FC<TitleProps> = ({ title, description }) => {
  return (
    <>
      <h1 className="decoration-primary text-center text-3xl font-bold decoration-2 underline-offset-[1rem] md:underline">
        {title}
      </h1>
      <h2 className="mx-2 text-center text-xl md:mx-8">{description}</h2>
    </>
  );
};
