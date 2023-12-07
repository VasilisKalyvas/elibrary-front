import React from 'react'
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { getAllRents } from '../../../store/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdminRentsListFilters, selectCurrentUserIsLoggedIn } from '../../../store/auth/selectors';
import { toast } from 'react-toastify'
import { defaultToastProps } from '../../../helpers/toastProps';
import { setRentsFilters } from '../../../store/auth/slice';
import useFilters from '../../../hooks/useFilter';

const RentActions = ({rentId}) => {
    const dispatch = useDispatch()
    const token = useSelector(selectCurrentUserIsLoggedIn)
    const filters = useSelector(selectAdminRentsListFilters)
    const { resetFilters } = useFilters({
        setFiltersAction: setRentsFilters,
        filters: filters, 
      });
    
    const handleChangeStatus = async () => {
        if(!rentId) return
        try {
            const url = `http://localhost:4000/api/books/update/rent/status/${rentId}`;
            const response = await axios.put(url, {}, {
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if(response?.data.message){
                dispatch(getAllRents())
            } else {
                return
            }
            resetFilters();
            toast('Updated Successfully', defaultToastProps)
        } catch (error) {
            throw error
        }
    }

    const handleDelete = async () => {
        if(!rentId || !token) return
        try {
            const url = `http://localhost:4000/api/books/delete/rent/${rentId}`;
            const response = await axios.delete(url, {
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if(response?.data?.deletedRent){
                dispatch(getAllRents())
            } else {
                return
            }
            resetFilters();
            toast('Deleted Successfully', defaultToastProps)
        } catch (error) {
            throw error
        }
    }

  return (
    <div className='flex gap-4 items-center justify-center'>
        <GoArrowSwitch size={18} className='cursor-pointer text-blue-500' onClick={handleChangeStatus}/>
        <FaTrashAlt className='cursor-pointer text-red-500' onClick={handleDelete}/>
    </div>
  )
}

export default RentActions