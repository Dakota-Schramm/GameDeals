import React from 'react'

import Catalogue from '.';
import { getCatalogue } from 'services';

export const metadata = {
  title: 'CheapShark Project - Home',
};

async function CataloguePage() {
  const catalogueGames = await getCatalogue();

  return <Catalogue entries={catalogueGames} />
}

export default CataloguePage
