import React from 'react'
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUserIsLoggedIn } from '../../../store/auth/selectors';
import { toast } from 'react-toastify'
import { defaultToastProps } from '../../../helpers/toastProps';
import { getAllBooks } from '../../../store/auth/actions';

const Actions = ({id}) => {
    const dispatch = useDispatch()
    const token = useSelector(selectCurrentUserIsLoggedIn)

    const handleDelete = async () => {
        if(!id || !token) return
        try {
            const url = `http://localhost:4000/api/books/${id}`;
            await axios.delete(url, {
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
            });
            dispatch(getAllBooks())
            
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