'use client'

import React from 'react'
import { usePathname } from 'next/navigation';

function getConditionalStyles(path: string) {
  if (path !== '/') return 'hidden';
}

const Header = () => {
  const pathname = usePathname();
  const styles = getConditionalStyles(pathname);

  return (
    <div className={'w-full bg-green-400 h-24 ' + styles}>
      <h1 className='text-3xl'>Header</h1>
    </div>
  );
}

export default Header