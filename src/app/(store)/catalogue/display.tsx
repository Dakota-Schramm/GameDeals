'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { ICatalogueGame } from './page'
import { useImageURL } from '~/hooks/useImageUrl';


const Header = ({ title, imageURL }) => (
  <header className='flex flex-col justify-center w-full p-2 bg-red-200'>
    <h3 className='text-center'>{title}</h3>
    <img src={imageURL}></img>
  </header>
)

const Footer = ({ normalPrice, salePrice }) => (
  <footer className='flex flex-col justify-between w-full lg:flex-row'>
    <h4 className='w-1/2 text-center bg-yellow-400'>{normalPrice}</h4>
    <h4 className='w-1/2 text-center bg-green-400'>{salePrice}</h4>
  </footer>
)

const DisplayGame = ({ gameID, title, normalPrice, salePrice, thumb, ...props }: ICatalogueGame) => {
  const imageURL = useImageURL(thumb)

  return (
    <Link href={"/game/" + gameID}>
      <section className='flex flex-col items-center justify-between w-full h-full border border-blue-600 border-solid'>
        <Header {...{title, imageURL}}/>
        <Footer {...{normalPrice, salePrice}} />
      </section>
    </Link>
  )
}


export default DisplayGame
