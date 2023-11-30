import React from 'react'
import { FaUser, FaHeart, FaPowerOff } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUserIsLoggedIn } from '../../store/auth/selectors';
import { logout } from '../../store/auth/slice';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { defaultToastProps } from '../../helpers/toastProps';

const Header = () => {
  const isLoggedIn = useSelector(selectCurrentUserIsLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleLogout = () => {
    const localStorageContent = localStorage.getItem('persist:root');
    const parsedLocalStorage = JSON.parse(localStorageContent);

    parsedLocalStorage.auth = {
      user: {},
      isLoading: false
    };

    const updatedLocalStorageContent = JSON.stringify(parsedLocalStorage);
    localStorage.setItem('persist:root', updatedLocalStorageContent);

    dispatch(logout())
    toast('Logout Successfully', defaultToastProps)
    navigate(`/`)
  }

  return (
    <div className='fixed z-[1] w-full bg-[#131a22] h-[40px] flex items-center text-white'>
        <div className='w-full px-4 flex items-center justify-between'>
            <div className='font-bold cursor-pointer hover:text-[#febd69]'>
              <Link to={'/'}>
                eLibrary
              </Link>
            </div>
              {
                isLoggedIn
                ?
                  <div className='flex items-center justify-between gap-5'>
                    <FaUser className='cursor-pointer hover:text-[#febd69]'/>
                    <FaHeart className='cursor-pointer hover:text-[#febd69]'/>
                    <FaPowerOff className='cursor-pointer hover:text-[#febd69]' onClick={handleLogout}/>
                  </div>
                : 
                <div className='flex items-center justify-between gap-2'>
                    <Link to={'/login'}>
                      Login
                    </Link>
                    or
                    <Link to={'/register'}>
                      Register
                    </Link>
                </div>
              }
        </div>
    </div>
  )
}

export default Header