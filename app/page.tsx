import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'CheapShark Project - Home',
};

const IndexPage = () => (
  <section>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </section>
)

export default IndexPage