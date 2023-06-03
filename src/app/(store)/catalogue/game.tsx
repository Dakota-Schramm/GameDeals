import React from 'react'

const Game = ({gameMeta, gamePrices}) => {
  return (
    <section className='w-full h-full text-white'>
      <p>{JSON.stringify(gameMeta)}</p>
      <p>{JSON.stringify(gamePrices)}</p>
    </section>
  );
}

export default Game
