import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>© {year} Denise Chan</p>
    </footer>
  );
};

export default Footer;
