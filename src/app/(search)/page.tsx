import React from 'react'

import SiteName from '~/utils/name';
import SearchBar from '~/components/search_bar';

export const metadata = {
  title: `${SiteName} - Search`,
};

const SearchSettingsContent = ({ children }) => (
  <main className='w-[360px] h-[800px] lg:w-[1024px] lg:h-[1080px] bg-gray-100 dark:bg-slate-700 mx-auto my-10'>
    <section className='flex items-center justify-center w-full h-full p-8 border border-red-600 border-solid lg:p-16'>
      <section className='flex flex-col justify-between w-full h-full'>
        {children}
      </section>
    </section>
  </main>
);

const RootPage = () => (
  <SearchSettingsContent>
    <section className='flex flex-col space-y-2 font-normal w-[250px] lg:w-[600px] mx-auto justify-start items-center'>
      <SearchBar />
      <h4 className='font-light'>
        The API for this app is provided by <a href="https://www.cheapshark.com/api">CheapShark</a>.
      </h4>
    </section>

  </SearchSettingsContent>
)

export default RootPage; 
