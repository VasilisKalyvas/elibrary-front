import React from 'react'
import { useSelector } from 'react-redux'
import { selectSelectedBook, selectSelectedBookIsAvailable, selectSelectedBookRendedBy } from '../../store/books/selectors'
import RentedBy from './RentedBy'
import AdminActions from './AdminActions'

const AdminView = () => {
    const selectedBook = useSelector(selectSelectedBook)
    const rendedBy = useSelector(selectSelectedBookRendedBy)
    const isAvailable = useSelector(selectSelectedBookIsAvailable)

  return (
    <div className='pt-4 w-full flex flex-col items-center'>
        {
            rendedBy && !isAvailable
            ?   <RentedBy/>
            : null
        }
        <AdminActions isAvailable={isAvailable} userId={rendedBy?.id} bookId={selectedBook?.id}/>
    </div>
  )
}

export default AdminView