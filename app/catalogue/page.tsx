import React from 'react'
import { NextResponse } from 'next/server';

import Catalogue from '.';

export const metadata = {
  title: 'CheapShark Project - Home',
};

interface ICatalogueGame {

}

async function getCatalogue(): Promise<ICatalogueGame[]> {
  const res = await fetch(
    'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15',
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) throw new Error('An error occurred while fetching the data.')

  const dataArray = await res.json();

  return dataArray;
}

async function CataloguePage() {
  const catalogueGames = await getCatalogue();

  return <Catalogue entries={catalogueGames} />
}

export default CataloguePage
