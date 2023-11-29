import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import useFilters from '../../hooks/useFilter';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const { handleSearchFilter } = useFilters();

  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value.toLowerCase())
  }

  const handleSearch = () => {
    handleSearchFilter({ type: 'search', value: searchText });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className='relative'>
      <input
        className='w-full md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] bg-[#e5e7eb] p-2 pr-12 
           border-2 border-[#37475a] 
           rounded-lg'
        placeholder='Search books...'
        type="text"
        onChange={handleOnChange}
        onKeyPress={handleKeyPress}
      />
      <FaSearch
        className='absolute top-[14px] right-3 cursor-pointer text-[#37475a] hover:text-[#febd69]'
        onClick={handleSearch}
      />
    </div>
  );
};

export default Search;