import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { GeneralTable } from '../table/GeneralTable';
import useTableKeys from '../hooks/useTableKeys';
import User from '../components/admin/rents/User';
import Rent from '../components/admin/books/Rent';
import Actions from '../components/admin/books/Actions';
import Filters from '../components/filters';
import { setBookFilters } from '../store/auth/slice';
import { selectAdminBooksListFilters, selectAdminBooksIsLoading, selectAdminBooksList } from '../store/auth/selectors';
import { getAllBooks } from '../store/auth/actions';
import FiltersBody from '../components/filters/FiltersBody';
import CreateBook from '../components/admin/books/CreateBook';

const AdminBooks = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectAdminBooksIsLoading)
  
  const config = {
    id: (value) => <span>{value}</span>,
    title: (value) => <div>{value}</div>,
    author: (value) => <div>{value?.name}</div>,
    year: (value) => <div>{value}</div>,
    createdAt: (value) => <div>{dayjs(value).format('DD-MM-YYYY')}</div>,
    isAvailable: (value) => <div>{value === false ? 'False' : 'True'}</div>,
    rentedById: (value) => <User value={value}/>,
    activeRentId: (value) => <Rent value={value}/>,
    actions: (book) => <Actions id={book?.id.props?.children}/>
  };
  const filters = useSelector(selectAdminBooksListFilters)
  const books = useSelector(selectAdminBooksList);
  const columns = Object.keys(config)
  const table = useTableKeys(books, config)

  const handleGetAllBooks = (filters) => {
    dispatch(getAllBooks(filters))
  }

 useEffect(() => {
    handleGetAllBooks()
  }, [])

  useEffect(() => {
    handleGetAllBooks(filters)
  }, [filters])
  

  return (
    <div className='pt-12 pl-4 pr-4'>
      <div className='flex align-center'>
        <CreateBook/>
        <Filters 
          FiltersBodyComponent={<FiltersBody/>}
          groupButtonsTheme={'light'}
          filters={filters}
          setFiltersAction={setBookFilters}
        />
      </div>
      <GeneralTable 
        maxHeight={'540px'}
        columns={columns} 
        data={table} 
        config={config} 
        isLoading={isLoading}
      />
    </div>
  );
};

export default AdminBooks;
