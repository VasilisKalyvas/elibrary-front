import dayjs from 'dayjs'
import React from 'react'

const BookDrawerBody = ({book}) => {
  return (
    <div className='flex flex-col gap-2 w-full bg-gray-200 rounded p-4 text-black'>
    <div className='font-bold'>Details:</div>
        <div className='flex flex-col gap-1'>
            <div>
                <img className='w-[200px] rounded' src={book?.image}/>
            </div>
            <div>
                Descripion :<br></br>
                <span className='text-gray-500'>{book?.description}</span>
            </div>
            <div>
                Author :
                <span className='text-gray-500'>  {book?.author.name}</span>
            </div>
            <div>
                Released Year :
                <span className='text-gray-500'>  {book?.year}</span>
            </div>
            <div>
                Added in Database :
                <span className='text-gray-500'>  {dayjs(book?.createdAt).format('DD-MM-YYYY')}</span>
            </div>
        </div>
    </div>
  )
}

export default BookDrawerBody