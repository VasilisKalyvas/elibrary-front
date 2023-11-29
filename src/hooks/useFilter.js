import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../store/books/slice';
import { selectBooksListFilters } from '../store/books/selectors';

const useFilters = () => {
  const filters = useSelector(selectBooksListFilters)
  const [selectedFilters, setSelectedFilters] = useState([]);
  const dispatch = useDispatch()

  const handleSearchFilter = ({ type, value }) => {
    if(!type) return 

    const updatedFilters = filters.filter(
      (filter) => filter?.key !== type
    );
    dispatch(setFilters([...updatedFilters, { key: type, value }]))

  }

  const handleFilterSelect = ({ type, value }) => {
    if(!type) return
    const isFilterExists = selectedFilters.find(
      (filter) => filter?.key === type && filter?.value === value.toString()
    );
    
    if (isFilterExists) {
      const updatedFilters = selectedFilters.filter(
        (filter) => filter !== isFilterExists
      );
      setSelectedFilters(updatedFilters);
    } else {
      setSelectedFilters([...selectedFilters, { key: type, value }]);
    }
  };

  const applyFilters = () => {
    if(selectedFilters?.length){
      dispatch(setFilters(selectedFilters))
    }
  }

  const resetFilters = () => {
    setSelectedFilters([])
    dispatch(setFilters([]))
  };

  return { selectedFilters, handleFilterSelect, applyFilters, resetFilters, handleSearchFilter };
};

export default useFilters;
