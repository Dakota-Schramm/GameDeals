import prices from '~/utils/constants/prices';

interface PriceGameInfo {
  title: string;
  steamAppID: string;
  thumb: string;
}

interface CheapestPriceEver {
  price: string;
  date: number;
}

interface GamePriceDeal {
  storeID: string;
  dealID: string;
  price: string;
  retailPrice: string;
  savings: string;
}

export interface IPrices {
  info: PriceGameInfo;
  cheapestPriceEver: CheapestPriceEver;
  deals: GamePriceDeal[];
}

// TODO: Move this into client component so can be used with filters.
// TODO: Create shared file for this in utils called filters.ts
export const getPrices = async (id: number): Promise<IPrices> => {
  if (process.env.environment === "development") return prices;

  const res = await fetch(
    `https://www.cheapshark.com/api/1.0/games?id=${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  if (!res.ok) throw new Error('An error occurred while fetching the data.')

  const data = await res.json()
  return data
}
