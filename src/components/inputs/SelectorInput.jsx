import React from 'react'

const SelectorInput = ({handleOnChange, type, options, defaultOption = 'Select...'}) => {
  return (
    <select class="text-sm rounded-lg w-full p-2.5" onChange={(e) => handleOnChange({type, value: e.target.value})}>
        <option selected>{defaultOption}</option>
        {
            options?.map((item) => (
                <option key={item?.id} value={item?.value}>{item?.title}</option>
            ))
        }
    </select>
  )
}

export default SelectorInput