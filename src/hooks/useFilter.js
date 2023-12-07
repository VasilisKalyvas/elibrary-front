import { useState } from 'react';
import { useDispatch } from 'react-redux';

const useFilters = ({setFiltersAction, filters}) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const dispatch = useDispatch()

  const handleMultipleFilters = ({ multipleFilters }) => {
    if (!multipleFilters?.length) return;

    const updatedFilters = filters.filter((filter) => !multipleFilters.some((mf) => mf.type === filter.key));
    const newFilters = multipleFilters.map(({ type, value }) => ({ key: type, value }));

    dispatch(setFiltersAction([...updatedFilters, ...newFilters]));
  }

  const handleSearchFilter = ({ type, value }) => {
    if(!type) return 
    const updatedFilters = filters.filter(
      (filter) => filter?.key !== type
    );
    dispatch(setFiltersAction([...updatedFilters, { key: type, value }]))

  }

  const handleFilterSelect = ({ type, value, notMultiple = false }) => {
    if(!type) returnBook
    let isFilterExists = {};

    if(notMultiple){
      isFilterExists = selectedFilters.find(
        (filter) => filter?.key === type
      );
    } else {
      isFilterExists = selectedFilters.find(
        (filter) => filter?.key === type && filter?.value.toString() === value.toString()
      );
    }

    if (isFilterExists) {
      if(notMultiple){
        const updatedFilters = selectedFilters.filter(
          (filter) => filter !== isFilterExists
        );
        setSelectedFilters([...updatedFilters, { key: type, value }]);
      } else {
        const updatedFilters = selectedFilters.filter(
          (filter) => filter !== isFilterExists
        );
        setSelectedFilters(updatedFilters);
      }
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

  return { 
      selectedFilters, 
      handleFilterSelect, 
      applyFilters, 
      resetFilters, 
      handleSearchFilter,
      handleMultipleFilters
    };
};

export default useFilters;
