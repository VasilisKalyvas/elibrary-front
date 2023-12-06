import React from 'react'
import { useSelector } from 'react-redux'
import { selectActiveRent } from '../../store/books/selectors'
import dayjs from 'dayjs'

const RentedBy = () => {
    const activeRent = useSelector(selectActiveRent)
  return (
    <div className='w-full flex flex-col'>
        <div>
            This Book is rented by <span className='underline'>{activeRent?.user?.username}</span>
        </div>
        <div>
            From: {dayjs(activeRent?.from).format('DD-MM-YYYY')}
        </div>
        <div>
            Until: {dayjs(activeRent?.until).format('DD-MM-YYYY')}
        </div>
    </div>
  )
}

export default RentedBy