import React from 'react'

import Button from "~/components/button"

// TODO: Extract button component from here
const Controls = ({ pageNum, handlePageDecrement, handlePageIncrement }) => (
  <section className='flex justify-between w-full bg-slate-700 dark:bg-white-200'>
    <Button onClick={handlePageDecrement}>{'<'}</Button> 
    <h5>Page {pageNum + 1}</h5>
    <Button onClick={handlePageIncrement}>{'>'}</Button>
  </section>
)

export default Controls;
