import React from 'react'
import Search from '../general/Search'
import FilterGroupButtons from './FilterGroupButtons'

const Filters = ({
    FiltersBodyComponent = <></>, 
    filters, 
    setFiltersAction, 
    groupButtonsTheme = 'dark',
    hideSearch = false,
    customFilterComponent
  }) => {

  return (
    <div className='w-full flex flex-wrap gap-4 items-center justify-end pt-4 pb-4'>
      {
        !hideSearch
        ?
          <Search  setFiltersAction={setFiltersAction}/>
        : null
      }
      {customFilterComponent}
       <div>
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