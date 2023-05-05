import React from 'react'

import './globals.css';

/* Meta tags added by default:
  <meta charSet="utf-8" />
  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
*/

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html className='box-border p-0 m-0'>
      <body className='box-border p-0 m-0 bg-gray-200 dark:bg-slate-900'>
        {children}
      </body>
    </html>
  );
}
