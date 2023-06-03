import React from 'react'

import catalogue from '~/utils/constants/catalogue';

export interface ICatalogueGame {
  internalName: string;
  title: string;
  metacriticLink: string;
  dealID: string;
  storeID: string;
  gameID: string;
  salePrice: string;
  normalPrice: string;
  isOnSale: string;
  savings: string;
  metacriticScore: string;
  steamRatingText: string;
  steamRatingPercent: string;
  steamRatingCount: string;
  steamAppID: string;
  releaseDate: number;
  lastChange: number;
  dealRating: string;
  thumb: string;
}
const GetCatalogueError = Error('An error occurred while fetching the data.'

const URL = 'https://www.cheapshark.com/api/1.0';

// TODO: Move this into client component so can be used with filters.
// TODO: Create shared file for this in utils called filters.ts
export const getCatalogue = async (): ICatalogueGame[] | Promise<ICatalogueGame[]> => {
  if (process.env.environment === "development") return catalogue;

  const res = await fetch(URL + '/deals?storeID=1&upperPrice=15', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) throw new Error('An error occurred while fetching the data.')

  const dataArray = await res.json();
  return dataArray;
}

