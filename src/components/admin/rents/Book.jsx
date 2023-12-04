import React, { useState } from 'react'
import SideDrawer from '../../drawer'
import axios from 'axios'
import BookDrawerBody from './BookDrawerBody'

const Book = ({value}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [book, setBook] = useState(false)
  
    const handleOpenModal = async () => {
      if(!value) return
      try {
        let url = `http://localhost:4000/api/books/${value}`
        const response = await axios.get(url);
  
        setBook(response.data);
        setIsOpen(!isOpen)
      } catch (error) {
        throw error
      }
    }
  
    return (
    <>
      <div className='cursor-pointer underline text-purple-700' onClick={handleOpenModal}>
        {value}
      </div>
      {
        isOpen
        ?
          <SideDrawer
            onClose={handleOpenModal}
            header={book?.title}
            body={<BookDrawerBody book={book}/>}
          />
        : null
      }
    </>
    )
  }

export default Book