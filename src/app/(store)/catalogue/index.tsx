'use client';

import React, { useState, useEffect } from 'react'

import DisplayGame from './display';
import type { ICatalogueGame } from './page';

import Controls from '~/components/controls';

import useWindowSize from '~/hooks/useWindowSize';
import { breakpoints as tw } from '~/utils/tailwindBreakpoints';

// TODO: Fix shelf so that sizes of games are even for each entry
const Shelf = ({entries}) => (
  <section className='grid w-full grid-cols-2 gap-4 lg:grid-cols-4 h-1/3'>
    {entries.map(
      (entry) => <DisplayGame key={entry.gameID} {...entry} />
    )}
  </section>
)

// TODO: Change interface to use tRPC: https://codevoweb.com/setup-trpc-server-and-client-in-nextjs-13-app-directory/
interface ICatalogue {
  entries: IGame[];
}

// TODO: Fix data fetch to occur here in the client component rather than server component
// TODO: Refactor Shelves to use grid and create spacing that way
const Catalogue = ({ entries }: ICatalogue) => {
  const { width } = useWindowSize();

  const rowSize =  width 
    ? width < tw.lg ? 2 : 4 // mobile or desktop
    : 0
  ;

  const numOfEntriesOnScreen = rowSize * 2;
  const n = entries.length

  const [wall, setWall] = useState(0);

  const topRowBegin = Math.min(n, wall * numOfEntriesOnScreen);
  const topRowEnd = Math.min(n, topRowBegin + rowSize);

  const bottomRowBegin = Math.min(n, topRowEnd + 1);
  const bottomRowEnd = Math.min(n, bottomRowBegin + rowSize);

  console.log(entries.slice(0, 5))

  function handlePageDecrement() {
    if (wall > 0) setWall((w) => w - 1);
  }

  // TODO: This should call the next page of the API and append it to the entries array
  // TODO: Extract EntrySection from here
  function handlePageIncrement() {
    if (wall < entries.length - 1) setWall((w) => w + 1);
  }

  return (
    <>
      <Shelf entries={entries.slice(topRowBegin, topRowEnd)} />
      <Controls {
        ...{
        pageNum: wall,
        handlePageDecrement,
        handlePageIncrement
      }} />
      <Shelf entries={entries.slice(bottomRowBegin, bottomRowEnd)} />
    </>
  );
};

export default Catalogue
