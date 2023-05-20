import { createContext, ReactNode, useState, useEffect } from 'react';
import useOptions, { SearchOptions } from '../hooks/useOptions';

export const optionsDefault: SearchOptions = {
  pageNumber: 0,
  pageSize: 60,
  sortBy: 'Deal Rating',
  desc: false,
  storeId: 1,
  lowerPrice: 0,
  upperPrice: 15,
  AAA: false,
  onSale: false,
  steamRating: 0,
  steamAppId: '',
  steamworks: false,
  title: '',
  exact: false,
  metacritic: 0,
}

export const OptionsContext = createContext({
  options: optionsDefault, 
  setOptions: (options: SearchOptions) => {},
});

export const OptionsProvider = (
  { children }: { children: ReactNode; }
) => {
  const [options, setOptions] = useOptions();

  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      {children}
    </OptionsContext.Provider>
  );
};
