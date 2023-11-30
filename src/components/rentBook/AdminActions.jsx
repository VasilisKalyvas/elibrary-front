import React from 'react'
import { useDispatch } from 'react-redux'
import { getBookById, returnBook } from '../../store/books/actions'
import { toast } from 'react-toastify'
import { defaultToastProps } from '../../helpers/toastProps';

const AdminActions = ({isAvailable, bookId, userId}) => {
    const dispatch = useDispatch()

    const handleReturnBook = async () => {
        try {
            if(!userId || !bookId) return
            await dispatch(returnBook({userId, bookId}))
            await dispatch(getBookById(bookId))
            toast('Returned Successfully', defaultToastProps)
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div className='w-full flex mt-4'>
        {
            isAvailable
            ?
                null
            : 
                <button 
                    className='w-[50%] px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-red-600'
                    onClick={handleReturnBook}>
                    Book Returned
                </button>
        }
    </div>  
  )
}

export default AdminActions