import React from 'react'
import { useSelector } from 'react-redux';
import RentBookForm from '../components/rentBook/Form';
import NotAuth from '../components/rentBook/NotAuth';
import { selectCurrentUserIsAdmin, selectCurrentUserIsLoggedIn } from '../store/auth/selectors';
import Container from '../components/general/Container';
import AdminView from '../components/rentBook/AdminView';

const RentBook = () => {
    const isLoggedIn = useSelector(selectCurrentUserIsLoggedIn)
    const isUserAdmin = useSelector(selectCurrentUserIsAdmin)

    return (
    <div className='pt-[60px] pl-4 pr-4 w-full flex items-center'>
        <Container className='flex flex-col items-center'>
            {
                isLoggedIn
                ?
                    <>
                        <RentBookForm/>
                        {       
                            isUserAdmin
                            ?
                                <AdminView/>
                            : null
                        }
                    </>
                :
                    <NotAuth/>
            } 
            
        </Container>  
    </div>
  )
}

export default RentBook