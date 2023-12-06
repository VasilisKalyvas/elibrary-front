import React, { useState } from 'react'
import SideDrawer from '../../drawer'
import RentDrawerBody from './RentDrawerBody'
import { useSelector } from 'react-redux'
import { selectAdminRentById } from '../../../store/auth/selectors'
import dayjs from 'dayjs'

const Rent = ({value}) => {
    const [isOpen, setIsOpen] = useState(false)
    const rent = useSelector((state) => selectAdminRentById(state)({id: value}))

    const handleOpenModal = async () => {
      if(!value) return
        setIsOpen(!isOpen)
    }
    
    return (
    <>
      <div className={`flex items-center justify-center ${value ? 'cursor-pointer': ''} text-purple-700`} onClick={handleOpenModal}>
        {value ? value : '-'}
      </div>
      {
        isOpen && rent
        ?
          <SideDrawer
            onClose={handleOpenModal}
            header={`${dayjs(rent?.from).format('DD-MM-YYYY')} ~ ${dayjs(rent?.until).format('DD-MM-YYYY')}`}
            body={<RentDrawerBody rent={rent}/>}
          />
        : null
      }
    </>
    )
  }

export default Rent