import React from 'react'

export const metadata = {
  title: 'CheapShark Project - Search Settings',
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

const SearchSettingsPage = () => {
  return (
    <SearchSettingsContent>
      <section className='flex items-center justify-center w-full h-full border-4 border-solid rounded-lg bg-white-700 border-white-300'>
        <p>Test</p>
      </section>
    </SearchSettingsContent>
  )
}

export default SearchSettingsPage; 
