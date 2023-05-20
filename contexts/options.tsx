import { createContext, ReactNode, useState, useEffect } from 'react';

export const OptionsContext = createContext({
  options: 'test',
  setOptions: (options: any) => {},
});

export const OptionsProvider = (
  { children }: { children: ReactNode; }
) => {
  const [options, setOptions] = useState('test');

  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      {children}
    </OptionsContext.Provider>
  );
};
