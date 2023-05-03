import { NextResponse } from 'next/server';

/*
  https://apidocs.cheapshark.com
*/

// TODO: Set this up to take parameters 
// pageNumber - REQUIRED
// pageSize - REQUIRED
export async function GET(request: Request) {
  const res = await fetch(
    'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15',
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) throw new Error('An error occurred while fetching the data.')

  const data = await res.json();

  return NextResponse.json({data});
}
