import React, { useEffect, useState } from 'react'
import AuthForm from '../components/general/AuthForm'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/auth/actions'
import { useNavigate } from 'react-router-dom'
import { selectCurrentUserIsLoggedIn } from '../store/auth/selectors'
import { toast } from 'react-toastify'
import { defaultToastProps } from '../helpers/toastProps'

const Login = () => {
    const isLoggedIn = useSelector(selectCurrentUserIsLoggedIn);
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = () => {
        if(!email?.length || !password?.length) return
        dispatch(login({email, password}))
        toast('Login Successfuly', defaultToastProps)
        setEmail('')
        setPassword('')
    }

    useEffect(() => {
        if(isLoggedIn){
            navigate('/')
        }
    }, [isLoggedIn])

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <AuthForm 
            title={'Login'} 
            email={email}
            setEmail={setEmail}
            password={password} 
            setPassword={setPassword}
            handleSubmit={handleSubmit}
        />    
    </div>
  )
}

export default Login