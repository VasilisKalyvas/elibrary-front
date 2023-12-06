import dayjs from 'dayjs'
import React from 'react'

const RentDrawerBody = ({rent}) => {

  return (
    <div className='flex flex-col gap-2 w-full bg-gray-200 rounded p-4 text-black'>
    <div className='font-bold'>Details:</div>
        <div className='flex flex-col gap-1'>
            <div className='flex gap-1'>
                From :<br></br>
                <span className='text-gray-500'>{dayjs(rent?.from).format('DD-MM-YYYY')}</span>
            </div>
            <div className='flex gap-1'>
                Until :
                <span className='text-gray-500'>{dayjs(rent?.until).format('DD-MM-YYYY')}</span>
            </div>
            <div className='flex gap-1'>
                Status :
                <span className='text-gray-500'>
                    {rent?.status === 'returned' 
                        ? 
                            <div className='text-green-500'>
                                Returned
                            </div>
                        : 
                            <div className='text-yellow-500'>
                                Rent
                            </div>
                    }
                </span>
            </div>
            <div className='flex gap-1'>
                CreatedAt :
                <span>
                    {dayjs(rent?.createdAt).format('DD-MM-YYYY')}
                </span>
            </div>
        </div>
    </div>
  )
}

export default RentDrawerBody