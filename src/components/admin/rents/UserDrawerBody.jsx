import dayjs from 'dayjs'
import React from 'react'

const UserDrawerBody = ({user}) => {
  return (
    <div className='flex flex-col gap-2 w-full bg-gray-200 rounded p-4 text-black'>
    <div className='font-bold'>Details:</div>
        <div className='flex flex-col gap-1'>
        <div>Email: {user?.email}</div>
        <div>Role: {user?.role.toUpperCase()}</div>
        <div>Registration date: {dayjs(user?.createdAt).format('DD-MM-YYYY')}</div>
        </div>
    </div>
  )
}

export default UserDrawerBody