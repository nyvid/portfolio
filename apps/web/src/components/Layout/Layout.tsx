import { FC, PropsWithChildren } from 'react';
import { BackgroundWave } from '../BackgroundWave/BackgroundWave';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';

export const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Navbar />
      <BackgroundWave />
      <main className="container mt-4 py-4">{children}</main>
      <Footer />
    </>
  );
};
