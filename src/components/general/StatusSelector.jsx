import React, { useEffect, useState } from 'react'
import Select from 'react-select'

const StatusSelector = ({status, handleOnChange, options}) => {
  const [currentSelected, setCurrentSelected] = useState('Select Status')

  useEffect(() => {
    if(status){
        const selectedStatus = options.find((item) => item?.value === status)
        setCurrentSelected(selectedStatus)
    }
}, [status])

  return (
    <div className="w-72 max-h-[200px]">
        <Select  
            onChange={(value) =>  {
              handleOnChange({type: 'status', value: value.value, label: value.label})
              setCurrentSelected(value)    
            }}
            value={currentSelected}
            options={options}
        />
    </div>
  )
}

export default StatusSelector