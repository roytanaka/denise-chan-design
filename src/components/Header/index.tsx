import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import './header.scss';

const invalidPaths = ['/about', '/contact'];

const isCurrent = ({ location }: { location: Location }) => {
  if (!invalidPaths.includes(location.pathname)) {
    return { 'aria-current': 'page' };
  }
  return {};
};
const Header = ({ ...props }) => {
  return (
    <header className="main-header">
      <nav>
        <Link getProps={isCurrent} {...props} to="/">
          Work
        </Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Link className="main-header__logo" to="/">
        <StaticImage src="../../images/dc-logo.png" width={135} alt="DC logo" />
        <p>Graphic Designer</p>
      </Link>
    </header>
  );
};

export default Header;
