import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { GeneralTable } from '../table/GeneralTable';
import { selectAdminRentsIsLoading, selectAdminRentsList } from '../store/auth/selectors';
import useTableKeys from '../hooks/useTableKeys';
import { getAllRents } from '../store/auth/actions'
import User from '../components/admin/rents/User';
import Book from '../components/admin/rents/Book';
import RentActions from '../components/admin/rents/RentActions';

const AdminRents = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectAdminRentsIsLoading)

  const config = {
    id: (value) => <span>{value}</span>,
    from: (value) => <div>{dayjs(value).format('DD-MM-YYYY')}</div>,
    until: (value) => <div>{dayjs(value).format('DD-MM-YYYY')}</div>,
    userId: (value) => <User value={value}/>,
    bookId: (value) => <Book value={value}/>,
    status: (value) => {
      if(value === 'returned')
      {
        return (
          <div className='text-green-500'>
            Returned
          </div>
        )
      } else {
        return (
          <div className='text-yellow-500'>
            Rent
          </div>
        )
      }
    },
    actions: (rent) => <RentActions rentId={rent?.id.props?.children} bookId={rent?.bookId?.props?.value}/>
  };

  const rents = useSelector(selectAdminRentsList);
  const filteredRents = useTableKeys(rents, config);
  const columns = Object.keys(config)

  const handleGetAllRents = () => {
    dispatch(getAllRents())
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

export default AdminRents;
