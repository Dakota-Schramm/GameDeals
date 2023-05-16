

import React from 'react'

import lastChanges from "../utils/constants/lastChanges";

// Fix this type
const getLastChange = async (): ICatalogueGame[] | Promise<ICatalogueGame[]> => {
  if (process.env.environment === "development") return lastChanges;

  const res = await fetch(
    'https://www.cheapshark.com/api/1.0/stores?lastChange',
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) throw new Error('An error occurred while fetching the data.')

  const lastChangesJson = await res.json();
  return lastChangesJson;
}

export default getLastChange
