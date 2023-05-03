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
    'http://localhost:3000/api/catalogue',
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) throw new Error('An error occurred while fetching the data.')

  const dataJson = await res.json();

  return dataJson.data;
}

async function CataloguePage() {
  const catalogueGames = await getCatalogue();

  return <Catalogue entries={catalogueGames} />
}

export default CataloguePage
