import React, { useState } from 'react'

type SortingMetric = 'Deal Rating' | 'Title' | 'Savings' | 
  'Price' | 'Metacritic' |  'Reviews' | 'Release' |
  'Store' | 'Recent'
;

/**
 * @param pageNumber - The page number to return, 0-indexed. Default 0.
 * @param pageSize - The number of results to return per page. Default 60.
 * @param sortBy - The metric to sort by. Default 'Deal Rating'.
 * @param desc - Whether to sort descending. Default false.
 * @remarks - Doesn't support 'output' option.
*/
interface MetaOptions {
  pageNumber?: number; // TODO: hook up with pagination
  pageSize?: number;
  sortBy?: SortingMetric;
  desc?: boolean;
}

/**
 * @param storeId - The store ID(s) to return results for. Can be a single ID or an array of IDs. Default 1 (Steam).
 * @param lowerPrice - The lower bound of the price range to filter by. Default 0.
 * @param upperPrice - The upper bound of the price range to filter by. Default 15. 50 is same as no upper bound.
 * @param AAA - Whether to only to only include deals with retail price > $29. Default false.
 * @param onSale - Whether to only return titles that are on sale. Default false.
*/
interface StoreOptions {
  storeId?: number | number[]; // TODO: This needed to be transformed from string to number
  lowerPrice?: number;
  upperPrice?: number;
  AAA?: boolean;
  onSale?: boolean;
}

/**
 * @param steamRating - The lower bound of the Steam rating range to filter by. Default 0.
 * @param steamAppId - The Steam App ID to return results for. Can be a single ID or an array of IDs.
 * @param steamworks - Whether to only return titles that have Steamworks. Default false.
*/
interface SteamOptions {
  steamRating?: number;
  steamAppId?: string;
  steamworks?: boolean;
}

/**
 * @param title - The title to return results for. Can be a single title or an array of titles.
 * @param exact - Whether to only return exact matches. Default false.
*/
interface TitleOptions {
  title?: string;
  exact?: boolean;
}

/**
 * @param metacritic - The lower bound of the Metacritic rating range to filter by. Default 0.
 */
interface SearchOptions extends MetaOptions, SteamOptions, StoreOptions, TitleOptions {
  metacritic?: number;
}

const useOptions = () => {
  const [options, setOptions] = useState<SearchOptions>({
    lowerPrice: 15,
  })

  return [options, setOptions];
}

function convertPossiblyCommaDelimString(value: string) {
  // if string doesn't contain any commas, then
  // its a 
}

export default useOptions
