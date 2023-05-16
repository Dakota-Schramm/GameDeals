import React from 'react'

import GameModal from './modal';
import Game from 'components/game';
import getPrices from 'services/getPrices'; 
import { getCatalogue } from 'services/';
// DEFAULTS

const styleOptions = {
  title: 'text-2xl',
  description: 'text-sm',
  bgColor: 'bg-gray-300/50',
  panel: 'grid grid-rows-10 w-[200px] h-[300px] lg:h-[600px] lg:w-[400px] text-gray-100 bg-gray-700',
}

let content = {
  title: 'Game Title',
  description: 'Game Description',
}

const CatalogueGameModal = async ({ params }) => {
  const gameEntries = await getCatalogue();
  const gameMeta = gameEntries.find((game) => Number(game.gameID) === params.id)
  const gamePrices = await getPrices(params.id)
  const entryHistory = {
    gameMeta,
    gamePrices,
  }

  const { info, cheapestPriceEver } = gamePrices;
  const { title } = info;

  content.title = title || content.title;
  if (title && cheapestPriceEver) {
    content.description = `${title} is currently on sale for ${cheapestPriceEver.price}!`
  }

  return (
    <GameModal {...{content, styleOptions, entryHistory}}>
      <Game />
    </GameModal>
  )

}

export default CatalogueGameModal;
