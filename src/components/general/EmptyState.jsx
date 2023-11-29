import React from 'react'

const EmptyState = ({content = 'There are no results.'}) => {
  return (
    <div className='d-flex items-center justify-between'>
        {content}
    </div>
  )
}

export default EmptyState