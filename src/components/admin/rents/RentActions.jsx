import React from 'react'
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { getAllRents } from '../../../store/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUserIsLoggedIn } from '../../../store/auth/selectors';
import { toast } from 'react-toastify'
import { defaultToastProps } from '../../../helpers/toastProps';

const RentActions = ({rentId, bookId}) => {
    const dispatch = useDispatch()
    const token = useSelector(selectCurrentUserIsLoggedIn)

    const handleChangeStatus = () => {
        try {
            
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
                Authorization: `${token}`, // Assuming it's a Bearer token
                'Content-Type': 'application/json',
            },
            });

            if(response?.data?.deletedRent){
                dispatch(getAllRents())
            } else {
                return
            }
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