import React from 'react'

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className='flex p-2 bg-blue-200'>
    <h6>
      {'Made by Dakota Schramm, '}
      <span>{currentYear}</span>
    </h6>
  </footer>
);

export default Footer;
