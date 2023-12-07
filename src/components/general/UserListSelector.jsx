import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'

const UserListSelector = ({userId, handleOnChange, options}) => {
  const [currentSelected, setCurrentSelected] = useState('Select User')

  useEffect(() => {
    if(userId){
        const selectedBook = options.find((item) => item?.value === userId)
        setCurrentSelected(selectedBook)
    }
}, [userId, options])

  return (
    <div className="w-72 max-h-[200px]">
        <Select  
            onChange={(value) =>{
              setCurrentSelected(value)
              handleOnChange({type: 'userId', value: value.value, label: value.label})}
          } 
            value={currentSelected}
            options={options}
        />
    </div>
  )
}

export default UserListSelector