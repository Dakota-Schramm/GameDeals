import React from 'react'

import Catalogue from '.';
import { getCatalogue } from 'services';

import SiteName from 'utils/name';

export const metadata = {
  title: `${SiteName} - Catalogue`,
};

/**
 * 
 * @returns The catalogue page with the fetched catalogue data 
 */

async function CataloguePage() {
  const catalogueGames = await getCatalogue();

  return <Catalogue entries={catalogueGames} />
}

export default CataloguePage
