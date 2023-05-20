'use client'

import './globals.css';

import React, { useContext } from 'react'

import Header from './header';
import Footer from './footer';
import { OptionsContext, OptionsProvider } from '../contexts/options';

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
  const {options, setOptions} = useContext(OptionsContext);

  return (
    <html className='box-border p-0 m-0'>
      <body className='box-border p-0 m-0 bg-gray-200 dark:bg-slate-900'>
        <RootContent>
          <OptionsProvider>{children}</OptionsProvider>
        </RootContent>
      </body>
    </html>
  );
}
