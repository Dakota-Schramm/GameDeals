import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';

import './globals.css';

/* Meta tags added by default:
  <meta charSet="utf-8" />
  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
*/

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
