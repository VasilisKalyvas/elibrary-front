import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectAdminUsersList, selectCurrentUserIsAdmin } from '../store/auth/selectors'
import { getAllUsers } from '../store/auth/actions'
import UserDetails from '../components/admin/users-list/UserDetails'
import AccordionList from '../components/admin/users-list/AccordionList'
import AccordionBody from '../components/admin/users-list/AccordionBody'

const AdminUsers = () => {
  const isUserAdmin = useSelector(selectCurrentUserIsAdmin)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const users = useSelector(selectAdminUsersList)
  const [opened, setOpened] = useState([])

  const handleGetUsersList = () => {
    dispatch(getAllUsers())
  }

  const handleOpen = (id) => {
    if(opened?.find(opened => opened === id)){
      const updatedOpened = opened?.filter(opened => opened !== id)
      setOpened(updatedOpened)
    } else {
      setOpened([...opened, id])
    }
  }
  
  
  useEffect(() => {
    if(!isUserAdmin){
      navigate('/')
    }
  }, [isUserAdmin])

  useEffect(() => {
    handleGetUsersList()
  }, [])

  return (
    <div className='pt-14 pl-4 pr-4 -full flex flex-col items-center justify-center'>
      {
        users?.map((user, index) => (
          <AccordionList
            key={index}
            id={user?.id}
            title={user?.username}
            isOpen={!!opened?.find(opened => opened === user?.id)}
            handleOpen={handleOpen}
            body={<AccordionBody body={<UserDetails user={user} />}/>}
          />
        ))
      }
    </div>
  )
}

export default AdminUsers