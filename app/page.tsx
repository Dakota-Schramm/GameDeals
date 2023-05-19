'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

const RootPage = ({ children }) => {
  const router = useRouter();

  useEffect(() => { router.push('/search') }, [])

  return <>{ children }</>
}

export default RootPage; 
