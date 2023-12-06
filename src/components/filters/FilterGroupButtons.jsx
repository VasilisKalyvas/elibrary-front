import React, { useState } from 'react'
import { BiSort } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import Drawer from '../drawer';
import FiltersBody from './FiltersBody';
import { useSelector } from 'react-redux';
import { setFilters } from '../../store/books/slice';
import useFilters from '../../hooks/useFilter';
import { selectBooksListFilters } from '../../store/books/selectors';

const FilterGroupButtons = () => {
  const filters = useSelector(selectBooksListFilters)

  const [isOpen, setIsOpen] = useState(false);
  const {handleFilterSelect, resetFilters, applyFilters } = useFilters({
   setFunction: setFilters,
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

  return (
    <>
      <div className='flex items-center justify-between gap-3'>
        <div className='border-2 
                  rounded-lg p-1 
                  border-[#37475a] text-[#37475a] 
                  hover:border-[#febd69] hover:text-[#febd69] cursor-pointer'
                  onClick={openDrawer}
                  >
              <TfiMenuAlt size={24}/>
          </div>
          <div className='border-2 
                  rounded-lg p-1 
                  border-[#37475a] text-[#37475a] 
                  hover:border-[#febd69] hover:text-[#febd69] cursor-pointer'>
              <BiSort size={24}/>
          </div>
      </div>
      {
        isOpen
        ?
          <Drawer 
              isOpen={isOpen}
              onClose={closeDrawer}
              onApply={handleApply}
              onReset={handleReset}
              body={
                <FiltersBody 
                  handleFilterSelect={handleFilterSelect}
                />
              }    
              header='Filters'/>
        : null
      }
    </>
  )
}

export default FilterGroupButtons