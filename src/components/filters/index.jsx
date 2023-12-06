import React from 'react'
import Search from '../general/Search'
import FilterGroupButtons from './FilterGroupButtons'

const Filters = ({FiltersBodyComponent = <></>, filters, setFiltersAction, groupButtonsTheme = 'dark'}) => {
  return (
    <div className='w-full flex flex-wrap gap-4 items-center justify-end pt-4 pb-4'>
       <Search/>
       <div className='pl-2'>
        <FilterGroupButtons
          groupButtonsTheme={groupButtonsTheme} 
          FiltersBodyComponent={FiltersBodyComponent} 
          filters={filters}
          setFiltersAction={setFiltersAction}
        />
       </div>
    </div>
  )
}

export default Filters