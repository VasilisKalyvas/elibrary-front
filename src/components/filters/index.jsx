import React from 'react'
import Search from '../general/Search'
import FilterGroupButtons from './FilterGroupButtons'

const Filters = () => {
  return (
    <div className='w-full flex flex-wrap gap-4 items-center justify-end p-4 mb-6'>
       <Search/>
       <div className='pl-6'>
        <FilterGroupButtons/>
       </div>
    </div>
  )
}

export default Filters