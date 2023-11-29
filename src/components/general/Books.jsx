import React from 'react'
import Card from './Card'
import Spinner from './Spinner'
import EmptyState from './EmptyState'

const Books = ({data, isLoading}) => {
  return (
    <div className='w-full 
                    flex flex-wrap
                    items-center 
                    justify-center gap-4'>
          {
            isLoading
            ?
            <Spinner/>

            :
            <>
              {
                data?.length 
                ?
                  <>
                    {
                      data?.map((item, index) => (
                        <Card key={index} item={item}/>
                      ))
                    }
                  </>
                :
                    <EmptyState />
              }
            </>
          }
    </div>
  )
}

export default Books