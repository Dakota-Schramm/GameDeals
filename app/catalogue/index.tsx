'use client';

import React, { useState } from 'react'

import Game, { IGame } from './game';
import Controls from '../controls';

import useWindowSize from '../../hooks/useWindowSize';
import { breakpoints as tw } from '../../utils/tailwindBreakpoints';

const Shelf = ({entries}) => (
  <section className='flex justify-between'>
    {entries.map(
      (entry) => <Game key={entry.gameID} {...entry} />
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

  const [wall, setWall] = useState(0);
  const topRowBegin = 0;
  const topRowEnd = topRowBegin + rowSize;
  const bottomRowBegin = topRowEnd + 1;
  const bottomRowEnd = bottomRowBegin + rowSize;

  console.log(entries)

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
