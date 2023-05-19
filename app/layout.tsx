import React, { useContext } from 'react'

import './globals.css';

/**
 * 
 * @remarks Meta tags added by default:
 * charSet="utf-8"
 * name="viewport" content="initial-scale=1.0, width=device-width"
 */

export default function RootLayout({catalogue, searchSettings, children}: {
  catalogue: React.ReactNode,
  searchSettings: React.ReactNode,
  children: React.ReactNode;
}) {
  const isSearch = displaySearchSection();

  return (
    <html className='box-border p-0 m-0'>
      <body className='box-border p-0 m-0 bg-gray-200 dark:bg-slate-900'>
        { children }
        <section>
          { isSearch && searchSettings }
          { !isSearch && catalogue }
        </section>
      </body>
    </html>
  );
}

function displaySearchSection() {
  const route = window.location.pathname;

  return route.includes('?search') 
}
