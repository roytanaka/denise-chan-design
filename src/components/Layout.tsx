import * as React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/Seo';
import Footer from './Footer';
import Header from './Header';
import { Helmet } from 'react-helmet';
import '@fontsource/open-sans';
import '@fontsource/raleway';
import '@fontsource/raleway/100.css';
import '@styles/open-props.css';
import '@styles/main.scss';

type MainLayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Seo />
      <Helmet htmlAttributes={{ lang: 'en', dir: 'ltr' }} />
      <Header />
      <main className="bg-gray main-padding">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
