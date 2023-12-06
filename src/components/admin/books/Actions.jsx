import React from 'react'
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import { getBooks } from '../../../store/books/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUserIsLoggedIn } from '../../../store/auth/selectors';
import { toast } from 'react-toastify'
import { defaultToastProps } from '../../../helpers/toastProps';

const Actions = ({id}) => {
    const dispatch = useDispatch()
    const token = useSelector(selectCurrentUserIsLoggedIn)

    const handleDelete = async () => {
        if(!id || !token) return
        try {
            const url = `http://localhost:4000/api/books/${id}`;
            const response = await axios.delete(url, {
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if(response?.data){
                dispatch(getBooks())
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
        <FaTrashAlt className='cursor-pointer text-red-500' onClick={handleDelete}/>
    </div>
  )
}

export default Actions