import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAdminRentsListFilters, selectCurrentUserIsLoggedIn } from '../../../store/auth/selectors'
import BookListSelector from '../../general/BookListSelector'
import UserListSelector from '../../general/UserListSelector'
import StatusSelector from '../../general/StatusSelector'
import axios from 'axios'

const FiltersBody = ({ handleFilterSelect }) => {
  const [book, setBook] = useState('')
  const [user, setUser] = useState('')
  const [status, setStatus] = useState('')
  const filters = useSelector(selectAdminRentsListFilters)
  
  const [bookOptions, setBookOptions] = useState([])
  const getBooks = async () => {
    try {
        const res = await axios.get('http://localhost:4000/api/books/?pageSize=0')

        const data = res.data.data.map((book) => {
            return {value: book.id, label: book.title}
        })
        setBookOptions(data)
    } catch (error) {
        throw(error)
    }
  }

  const [userOptions, setUserOptions] = useState([])
  const token = useSelector(selectCurrentUserIsLoggedIn)
  const getusers = async () => {
      try {
          const res = await axios.get('http://localhost:4000/api/admin/users',
            {
              headers: {
                Authorization: `${token}`, // Assuming it's a Bearer token
                'Content-Type': 'application/json',
              }
            }
          )
          const data = res.data.map((user) => {
              return {value: user.id, label: user.username}
          })
          setUserOptions(data)
      } catch (error) {
          throw(error)
      }
  }

  const statusOptions = [
    {label: 'Rent', value: 'rent'},
    {label: 'Returned', value: 'returned'},
  ]

  const handleOnChange = (item) => {
    handleFilterSelect({type: item.type, value: item.value, notMultiple: true})
  }

  useEffect(() => {
    if(!filters?.length) return

    const findBookFilter = filters?.find(filter => filter?.key === 'bookId')
    if(findBookFilter){
      setBook(findBookFilter.value)
    }

    const findUserFilter = filters?.find(filter => filter?.key === 'userId')
    if(findUserFilter){
      setUser(findUserFilter.value)
    }

    const findStatusFilter = filters?.find(filter => filter?.key === 'status')

    if(findStatusFilter){
      setStatus(findStatusFilter.value)
    }
  }, [filters])

  useEffect(() =>{
    getBooks();
    getusers();
  }, [])

  useEffect(() =>{
    if(!filters?.length){
      setBook('')
      setUser('')
      setStatus('')
    }
  }, [filters])
  
  return (
    <div className='flex flex-col gap-4'>
      <div>Filter By Book:</div>
      <BookListSelector options={bookOptions} bookId={book} handleOnChange={handleOnChange}/>
      <div className='mt-2'>Filter By User:</div>
      <UserListSelector userId={user} options={userOptions} handleOnChange={handleOnChange}/>
      <div>Filter By Status</div>
      <StatusSelector status={status} options={statusOptions} handleOnChange={handleOnChange}/>
    </div>
  )
}

export default FiltersBody