import * as React from 'react';
import { Link } from 'gatsby';
// import Seo from "../components/Seo"
import Footer from './Footer';
import Header from './Header';

type MainLayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: MainLayoutProps) => {
  return (
    <>
      {/* <Seo /> */}

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
