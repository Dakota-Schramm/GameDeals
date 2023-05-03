import React from 'react'

const CatalogueLayout = ({children}) => {
  return (
    <section className='flex items-center justify-center p-8 border border-red-600 border-solid lg:p-16'>
      {children}
    </section>
  )
}

export default CatalogueLayout