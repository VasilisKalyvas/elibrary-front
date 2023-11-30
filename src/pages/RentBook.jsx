import React from 'react'
import { useSelector } from 'react-redux';
import RentBookForm from '../components/rentBook/Form';
import NotAuth from '../components/rentBook/NotAuth';
import { selectCurrentUserIsLoggedIn } from '../store/auth/selectors';
import Container from '../components/general/Container';

const RentBook = () => {
    const isLoggedIn = useSelector(selectCurrentUserIsLoggedIn)
  return (
    <div className='pt-[60px] pl-4 pr-4 w-full flex items-center'>
        <Container className='flex items-center'>
            {
                isLoggedIn
                ?
                    <RentBookForm/>
                :
                    <NotAuth/>
            } 
        </Container>  
    </div>
  )
}

export default RentBook