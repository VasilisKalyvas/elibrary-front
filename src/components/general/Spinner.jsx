import React from 'react'
import { FaCircleNotch } from "react-icons/fa6";

const Spinner = () => {
  return (
    <div className='w-100 flex items-center justify-center'>
        <FaCircleNotch size={32} className='animate-spin text-[#febd69]' />
    </div>
  )
}

export default Spinner