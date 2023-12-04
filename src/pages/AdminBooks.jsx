import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { GeneralTable } from '../table/GeneralTable';
import useTableKeys from '../hooks/useTableKeys';
import User from '../components/admin/rents/User';
import { selectBooks, selectBooksisLoading } from '../store/books/selectors';
import { getBooks } from '../store/books/actions';

const AdminBooks = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectBooksisLoading)

  const config = {
    id: (value) => <span>{value}</span>,
    title: (value) => <div>{value}</div>,
    author: (value) => <div>{value?.name}</div>,
    year: (value) => <div>{value}</div>,
    createdAt: (value) => <div>{dayjs(value).format('DD-MM-YYYY')}</div>,
    isAvailable: (value) => <div>{value === false ? 'False' : 'True'}</div>,
    rentedById: (value) => <User value={value}/>,
    actions: (book) => <>{book?.bookId?.props?.value}</>
  };

  const books = useSelector(selectBooks);
  const filteredRents = useTableKeys(books, config);
  const columns = Object.keys(config)

  const handleGetAllRents = () => {
    dispatch(getBooks())
  }

  useEffect(() => {
    handleGetAllRents()
  }, [])

  return (
    <div className='pt-12 pl-4 pr-4'>
      <GeneralTable 
        columns={columns} 
        data={filteredRents} 
        config={config} 
        isLoading={isLoading}
      />
    </div>
  );
};

export default AdminBooks;
