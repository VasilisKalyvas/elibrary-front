import React, { useState } from 'react'
import SideDrawer from '../../drawer'
import axios from 'axios'
import { selectCurrentUserIsLoggedIn } from '../../../store/auth/selectors'
import { useSelector } from 'react-redux'
import UserDrawerBody from './UserDrawerBody'

const User = ({value}) => {
    const [isOpen, setIsOpen] = useState(false)
    const token = useSelector(selectCurrentUserIsLoggedIn)
    const [user, setUser] = useState(false)
  
    const handleOpenModal = async () => {
      if(!value) return
      try {
        let url = `http://localhost:4000/api/admin/user/${value}`
        const response = await axios.get(url, {
          headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
          },
        });
  
        setUser(response.data);
        setIsOpen(!isOpen)
      } catch (error) {
        throw error
      }
    }
  
    return (
    <>
      <div className='cursor-pointer underline text-purple-700' onClick={handleOpenModal}>
        {value}
      </div>
      {
        isOpen
        ?
          <SideDrawer
            onClose={handleOpenModal}
            header={user?.username}
            body={<UserDrawerBody user={user}/>}
          />
        : null
      }
    </>
    )
  }

export default User