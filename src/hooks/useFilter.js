import { useState } from 'react';
import { useDispatch } from 'react-redux';

const useFilters = ({setFiltersAction, filters}) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const dispatch = useDispatch()

  const handleSearchFilter = ({ type, value }) => {
    if(!type) return 

    const updatedFilters = filters.filter(
      (filter) => filter?.key !== type
    );
    dispatch(setFiltersAction([...updatedFilters, { key: type, value }]))

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
      dispatch(setFiltersAction(selectedFilters))
    }
  }

  const resetFilters = () => {
    setSelectedFilters([])
    dispatch(setFiltersAction([]))
  };

  return { selectedFilters, handleFilterSelect, applyFilters, resetFilters, handleSearchFilter };
};

export default useFilters;
