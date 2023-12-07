import React, { useEffect, useState } from 'react'
import { selectBooksisLoading, selectSelectedBook } from '../../store/books/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { selectCurrentUser, selectCurrentUserIsAdmin } from '../../store/auth/selectors';
import { errorToastProps, defaultToastProps } from '../../helpers/toastProps';
import { toast } from 'react-toastify'
import { getBookById, rentBook } from '../../store/books/actions';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../general/Spinner';
import { clearSelectedBook } from '../../store/books/slice';

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const selectedBook = useSelector(selectSelectedBook);
  const isLoading = useSelector(selectBooksisLoading)
  const user = useSelector(selectCurrentUser)
  const defaultFromDate = dayjs();
  const defaultUntilDate = dayjs().add(7, 'day');
  const [from, setFrom] = useState(defaultFromDate);
  const [until, setUntil] = useState(defaultUntilDate);

  const handleRentBook  = () => {
    if(!user.id || !selectedBook.id || !from || !until){
      toast('Field Missing!', errorToastProps);
      return
    }
    
    let params = {
      userId: user.id,
      bookId: selectedBook.id,
      from, 
      until
    }

    dispatch(rentBook(params))
    toast('Book Rented Successfully', defaultToastProps)
    navigate('/')
  }

  const getBook = () => {
    dispatch(clearSelectedBook())
    dispatch(getBookById(id))
  }

  useEffect(() => {
    getBook()
  }, [])

  return (
    <div className='w-full flex items-center justify-between flex-wrap gap-4'>
      {
        isLoading
        ?
          <Spinner/>
        :
          <>
            {
              selectedBook?.id
              ?
                <>
                  <div className='flex items center flex-wrap gap-4'>
                    <img className='max-w-[200px]' src={selectedBook?.image}/>
                    <div className='max-w-[400px] flex flex-col items center justify-center'>
                      <div className='font-bold text-md text-[#37475a] mt-2 mb-auto'>{selectedBook?.title}</div>
                      <div className="w-full text-gray-700 text-base mt-4">
                          <p className='text-gray-900'>Description:</p>
                          {selectedBook?.description}
                      </div>
                      <div className="w-full flex text-gray-700 text-base mt-4">
                      <div className='text-gray-900 mr-1'>Author:</div>
                        {selectedBook?.author?.name}
                      </div>
                      <div className="w-full flex text-gray-700 text-base mt-4 mb-10">
                      <div className='text-gray-900 mr-1'>Publish Year:</div>
                        {selectedBook?.year}
                      </div>
                    </div>
                  </div>
                  <LocalizationProvider 
                    dateAdapter={AdapterDayjs} 
                  >
                    <div className='flex items flex-col center justify-between gap-4'>
                      {
                        selectedBook?.isAvailable
                        ?
                          <>
                            <DatePicker
                              format='DD/MM/YYYY'
                              label="Rent From:"
                              value={from}
                              onChange={(value) => setFrom(value)}
                            />
                            <DatePicker
                              format='DD/MM/YYYY'
                              label="Rent Until:"
                              value={until}
                              onChange={(value) => setUntil(value)}
                            />
                            <div className='w-full flex items-center justify-center'>
                              <button 
                                className='w-[50%] px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-green-600'
                                onClick={handleRentBook}>
                                Rent
                              </button>
                            </div>
                          </>
            
                        : <div>Book is not Available</div>
            
                      }
                    </div>
                  </LocalizationProvider>
                </>
              : <div className='w-full flex items-center justify-center'>Book Not Found!</div>
            }
          </>
      }
    </div>
  )
}

export default Form