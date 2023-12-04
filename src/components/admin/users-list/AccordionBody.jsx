import React from 'react'

const AccordionBody = ({body}) => {
  return (
    <div className='flex flex-col gap-2 w-full bg-gray-200 rounded p-4 text-black'>
        <div className='font-bold'>Details:</div>
        {body}
    </div>
  )
}

export default AccordionBody