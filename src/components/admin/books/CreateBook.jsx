import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import SideDrawer from '../../drawer';
import CreateBookForm from './CreateBookForm';

const CreateBook = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

  return (
    <div className='flex align-items pt-6 pb-3 pl-2'>
        <IoIosAddCircle
            className='text-white cursor-pointer'
            size={32}
            onClick={handleOpen}
        />
        {
            open
            ?
                <SideDrawer
                    onClose={handleOpen}
                    header={'Add New Book'}
                    body={<CreateBookForm/>}
                />
            : null
        }
    </div>
  )
}

export default CreateBook