import React, { useState } from 'react'
import Select from 'react-select'

const CreateBookForm = ({
        authorOptions, 
        categoriesOptions,
        setImage,
        setAuthor,
        setYear,
        setTitle,
        setDescription,
        setCategories
    }) => {
  return (
    <div className='flex flex-col gap-5'>
        <div className='flex items-center gap-4'>
            Title: 
                <input
                onChange={(e) => setTitle(e.target.value)} 
                className='border-solid border-2 border-[#e5e7eb] rounded pl-2 h-[38px]' 
                placeholder='title...'/>
        </div>
        <div className='flex items-center gap-4'>
            Description: 
            <input
                onChange={(e) => setDescription(e.target.value)}
                className='border-solid border-2 border-[#e5e7eb] rounded pl-2 h-[38px]' 
                placeholder='description...'/>
        </div>
        <div className='flex items-center gap-4'>
            Author: 
            <Select
                className='w-full' 
                onChange={(value) => setAuthor(value)} 
                options={authorOptions}
            />
        </div>
        <div className='flex items-center gap-4'>
            Category: 
            <Select 
                className='w-full' 
                onChange={(value) => setCategories([value])} 
                options={categoriesOptions}
            />
        </div>
        <div className='flex items-center gap-4'>
            Year: <input
                onChange={(e) => setYear(e.target.value)} 
                className='border-solid border-2 border-[#e5e7eb] rounded pl-2 h-[38px]' 
                placeholder='year...'/>
        </div>
        <div className='flex items-center gap-4'>
            Image: <input
                onChange={(e) => setImage(e.target.value)} 
                className='border-solid border-2 border-[#e5e7eb] rounded pl-2 h-[38px]' 
                placeholder='image...'/>
        </div>
    </div>
  )
}

export default CreateBookForm