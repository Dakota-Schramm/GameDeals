'use client'

import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function getConditionalStyles(path: string) {
  if (path !== '/') return 'hidden';
}

const DownButton = () => (
  <Link href='/catalogue'>
    <button className='w-10 h-full border border-gray-500 border-solid'>
      V
    </button>
  </Link>
)

const Header = () => {
  const pathname = usePathname();
  const styles = getConditionalStyles(pathname);

  return (
    <div className={'flex w-full bg-green-400 h-24 justify-between p-6 ' + styles}>
      <h1 className='text-3xl'>Header</h1>
      <DownButton />
    </div>
  );
}

export default Header
