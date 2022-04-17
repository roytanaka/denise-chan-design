import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <StaticImage src="../../images/dc-logo.png" width={135} alt="DC logo" />
    </header>
  );
};

export default Header;
