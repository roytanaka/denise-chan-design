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
        <Logo />
        <p>Graphic Designer</p>
      </Link>
    </header>
  );
};

export default Header;

function Logo() {
  return (
    <svg
      className="logo"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 135"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.243.102c18.31.655 35.523 7.24 48.402 20.587A67.216 67.216 0 0 1 66.49 55.81c2.365-13.555 8.953-26.24 18.683-35.97A67.206 67.206 0 0 1 199.9 67.36h-2a65.21 65.21 0 0 0-40.252-60.241 65.206 65.206 0 0 0-90.14 58.754c16.882 17.17 33.836 34.404 46.319 47.091l14.208 14.44 7.047 7.16c-14.185 0-27.82-3.372-39.724-11.326A67.2 67.2 0 0 1 66.49 78.906 67.207 67.207 0 0 1 .286 134.553v-2a65.204 65.204 0 0 0 46.103-19.094c12.307-12.305 19.282-29.385 19.098-46.788C43.714 44.527 21.547 22.699.243.102Zm65.146 63.616C38.518 36.388 12.322 9.723 5.13 2.328a65.216 65.216 0 0 1 60.259 61.39Zm2.116 5.005a65.201 65.201 0 0 0 62.758 63.796l-3.653-3.712-14.209-14.44a224098.281 224098.281 0 0 1-44.896-45.644Z"
      />
    </svg>
  );
}
