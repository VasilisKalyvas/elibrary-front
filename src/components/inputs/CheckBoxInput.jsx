import React from 'react'

const CheckBoxInput = ({label, options, type = '', handleOnChange, filters}) => {

    const handleSelected = (value) => {
        if(filters?.length){
            const isExistedInFilters = filters?.find((filter) => filter?.key === type && filter?.value === value.toString())
            return isExistedInFilters
        }else {
            return false
        }
    }

  return (
    <div>
        <div className='mb-4'>{label}</div>
            <ul className="px-3 pb-3 text-sm">
                    {
                        options?.map((item) => (
                            <li key={item?.id}>
                                <div className="flex items-center p-2 rounded">
                                    <input 
                                        defaultChecked={handleSelected(item?.id)} 
                                        onChange={(e) => handleOnChange({type, value: e.target.value})} 
                                        type="checkbox" 
                                        value={item?.id} 
                                        className="w-4 h-4 cursor-pointer"
                                    />
                                    <label className="w-full ms-2 text-sm font-medium ">{item?.title || item?.name}</label>
                                </div>
                            </li>
                        ))
                    }
            </ul>
    </div>
  )
}

export default CheckBoxInput