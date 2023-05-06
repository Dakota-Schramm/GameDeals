import React from 'react'

import catalogue from '../utils/constants/catalogue';

// {
//     internalName: 'TRIALSFUSION',
//     title: 'Trials Fusion',
//     metacriticLink: '/game/pc/trials-fusion',
//     dealID: '4IJ0LTAdmmQQGqSS1%2F1PygUbGhrm96PdftnynpvD0m0%3D',
//     storeID: '1',
//     gameID: '107837',
//     salePrice: '4.99',
//     normalPrice: '19.99',
//     isOnSale: '1',
//     savings: '75.037519',
//     metacriticScore: '80',
//     steamRatingText: 'Mixed',
//     steamRatingPercent: '67',
//     steamRatingCount: '1940',
//     steamAppID: '245490',
//     releaseDate: 1397606400,
//     lastChange: 1682960762,
//     dealRating: '8.2',
//     thumb: 'https://cdn.cloudflare.steamstatic.com/steam/apps/245490/capsule_sm_120.jpg?t=1680016918'
// }
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

// TODO: Move this into client component so can be used with filters.
// TODO: Create shared file for this in utils called filters.ts
const getCatalogue = async (): ICatalogueGame[] | Promise<ICatalogueGame[]> => {
  if (process.env.environment === "development") return catalogue;

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

export default getCatalogue;
