import React, { useContext } from 'react'

import Header from './header';

import './globals.css';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className='flex'>
    <h6>
      Made by Dakota Schramm,
      <span>{currentYear}</span>
    </h6>
  </footer>
);

const RootContent = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

/**
 * 
 * @remarks Meta tags added by default:
 * charSet="utf-8"
 * name="viewport" content="initial-scale=1.0, width=device-width"
 */
export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html className='box-border p-0 m-0'>
      <body className='box-border p-0 m-0 bg-gray-200 dark:bg-slate-900'>
        <RootContent>{ children }</RootContent>      
      </body>
    </html>
  );
}
