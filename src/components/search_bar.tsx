'use client'

import React, { useContext, useState } from 'react'
import { Menu } from '@headlessui/react'

import SiteName from '~/utils/name'
import useOptions from '~/hooks/useOptions';
import { optionsDefault, OptionsContext } from '~/contexts/options';

const OptionsMenu = () => {
  const {options, setOptions} = useContext(OptionsContext); 

  console.log(options, optionsDefault);

  return (
    <Menu as='div' className='relative'>
      {/* TODO: Use icon here */}
      <Menu.Button className='ml-1'>
        <img src='/settings.svg' alt='Settings' className='h-full' />
      </Menu.Button> 

      {/*
        By default, the `Menu.Items` will automatically show/hide
        when the `Menu.Button` is pressed.
      */}
      <Menu.Items className='absolute grid grid-cols-3 grid-rows-5 w-[250px] mt-2 bg-white rounded-xl right-0'>
        {Object.entries(optionsDefault).map(
          ([k, v]) => (
          <Menu.Item>{
            ({ active }) => <button>{k}</button>
          }
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )

}

const SearchBar = () => {
  return (
    <section className="flex justify-between w-full p-2 bg-white rounded-lg">
      <h3 className='mr-1'>{SiteName}</h3> 
      <input type="search" name="" id="" className='w-full' /> 
      <OptionsMenu />
    </section>
  )
}

export default SearchBar
