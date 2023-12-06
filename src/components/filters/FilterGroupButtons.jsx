import React, { useState } from 'react'
import { BiSort } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import Drawer from '../drawer';
import useFilters from '../../hooks/useFilter';

const FilterGroupButtons = ({ FiltersBodyComponent, filters, setFiltersAction, groupButtonsTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {handleFilterSelect, resetFilters, applyFilters } = useFilters({
    setFiltersAction,
    filters
  });

  const handleApply = () => {
      applyFilters();
      closeDrawer();
  };

  const handleReset = () => {
    resetFilters();
    closeDrawer();
  }

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  const FiltersBodyComponentWithProps = React.cloneElement(FiltersBodyComponent, {
    handleFilterSelect,
  });

  return (
    <>
      <div className='flex items-center justify-between gap-3'>
        <div className={`border-2 
                        rounded-lg p-2
                        cursor-pointer
                        border-[#37475a] text-[#37475a] 
                        hover:border-[#febd69] hover:text-[#febd69]
                        ${groupButtonsTheme !== 'dark' ? `bg-white`: ''}
                        `}
                  onClick={openDrawer}
                  >
              <TfiMenuAlt size={24}/>
          </div>
          {/* <div className={`border-2 
                        rounded-lg p-1
                        cursor-pointer
                        border-[#37475a] text-[#37475a] 
                        hover:border-[#febd69] hover:text-[#febd69]
                        ${groupButtonsTheme !== 'dark' ? `bg-white`: ''}
                      `}>
              <BiSort size={24}/>
          </div> */}
      </div>
      {
        isOpen
        ?
          <Drawer 
              isOpen={isOpen}
              onClose={closeDrawer}
              onApply={handleApply}
              onReset={handleReset}
              body={FiltersBodyComponentWithProps}    
              header='Filters'/>
        : null
      }
    </>
  )
}

export default FilterGroupButtons