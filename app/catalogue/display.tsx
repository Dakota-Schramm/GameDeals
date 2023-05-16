'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { ICatalogueGame } from './page'

const DisplayGame = ({ gameID, title, normalPrice, salePrice, thumb, ...props }: ICatalogueGame) => {
  const [image, setImage] = useState(undefined);

  // ! This is not correct
  // useEffect(() => {
  //   fetch(thumb)
  //   .then((res) => {
  //     if (!res.ok) throw new Error('An error occurred while fetching the data.');
  //     return res.blob();
  //   })
  //   .then((imageBlob) => setImage(imageBlob))
  //   .catch((err) => console.log(err))}
  // }, [])

  return (
    <Link href={"/game/" + gameID}>
      <section className='flex flex-col items-center justify-between w-full h-full border border-blue-600 border-solid'>
        <header className='bg-red-200'>
          <h3>{title}</h3>
          {/* {image} */}
        </header>
        <footer className='flex flex-col justify-between lg:flex-row'>
          <h4 className='bg-yellow-400'>{normalPrice}</h4>
          <h4 className='bg-green-400'>{salePrice}</h4>
        </footer>
      </section>
    </Link>
  )
}


export default DisplayGame
