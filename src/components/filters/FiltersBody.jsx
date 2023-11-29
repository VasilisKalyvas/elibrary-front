import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthorsList, selectBooksListFilters, selectCategoriesList } from '../../store/books/selectors';
import CheckBoxItem from '../general/CheckBoxItem';

const FiltersBody = ({ handleFilterSelect }) => {
  const filters = useSelector(selectBooksListFilters);
  const categories = useSelector(selectCategoriesList);
  const authors = useSelector(selectAuthorsList);

  const checkBoxesData = [
    {
      id: 1,
      title: 'Categories',
      type: 'CategoryId',
      isOpen: false,
      data: categories,
    },
    {
      id: 2,
      title: 'Authors',
      type: 'authorId',
      isOpen: false,
      data: authors,
    },
  ];

  const [checkBoxes, setCheckBoxes] = useState(checkBoxesData);

  const handleOpen = (value) => {
    const updatedCheckBoxes = checkBoxes?.map((item) => {
      return item.id === value ? { ...item, isOpen: !item.isOpen } : item;
    });
    setCheckBoxes(updatedCheckBoxes);
  };

  return (
    <div className='h-[560px] overflow-y-auto custom-scrollbar'>
      {checkBoxes?.map((item) => (
        <CheckBoxItem
          handleOpen={handleOpen}
          key={item.id}
          id={item.id}
          title={item.title}
          type={item.type}
          data={item.data}
          isOpen={item.isOpen}
          filters={filters}
          handleFilterSelect={handleFilterSelect}
        />
      ))}
    </div>
  );
};

export default FiltersBody;