import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'

const BookListSelector = ({bookId, handleOnChange, options}) => {
    const [currentSelected, setCurrentSelected] = useState('Select Book')

    useEffect(() => {
        if(bookId){
            const selectedBook = options.find((item) => item?.value === bookId)
            setCurrentSelected(selectedBook)
        }
    }, [bookId, options])

  return (
    <div className="w-72 max-h-[200px]">
        <Select  
            value={currentSelected}
            onChange={(value) =>{
                setCurrentSelected(value)
                handleOnChange({type: 'bookId', value: value.value, label: value.label})}
            } 
            options={options}
        />
    </div>
  )
}

export default BookListSelector