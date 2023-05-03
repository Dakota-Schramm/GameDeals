import React from 'react'

const CatalogueLayout = ({children}) => {
  return (
    <main className='w-[360px] h-[800px] lg:w-[1024px] lg:h-[1080px] bg-gray-100 dark:bg-slate-700 mx-auto my-10'>
      <section className='flex items-center justify-center w-full h-full p-8 border border-red-600 border-solid lg:p-16'>
        <section className='flex flex-col justify-between'>
          {children}
        </section>
      </section>
    </main>
  )
}

export default CatalogueLayout