import React from 'react'

import Game from '~/components/game';

import { getCatalogue } from '~/controllers/catalogue';
import { getPrices } from '~/controllers/prices';

import SiteName from '~/utils/name';

export const metadata = {
  title: `${SiteName} - Home`,
};

// https://nextjs.org/docs/getting-started/react-essentials#sharing-fetch-requests-between-server-components
// TODO: Fetch data here from gameEntries and pass it to Game component
const GamePage = async ({ params }: { params: { id: number },  }) => {
  const gameEntries = await getCatalogue()
  const gameMeta = gameEntries.find((game) => Number(game.gameID) === params.id)
  const gamePrices = await getPrices(params.id)
  
  return <Game {...{gameMeta, gamePrices}} />
}

export default GamePage;
