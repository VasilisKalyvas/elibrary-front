import React, { useEffect, useState } from 'react'
import AuthForm from '../components/general/AuthForm'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../store/auth/actions'
import { useNavigate } from 'react-router-dom'
import { selectCurrentUserIsLoggedIn } from '../store/auth/selectors'

const Register = () => {
    const isLoggedIn = useSelector(selectCurrentUserIsLoggedIn);
    const dispatch = useDispatch()
    const [username, setUsename] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = () => {
        if(!username.length || !email?.length || !password?.length) return
        dispatch(register({username, email, password}))
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
            isLogin={false}
            title={'Register'}
            username={username}
            setUsename={setUsename} 
            email={email}
            setEmail={setEmail}
            password={password} 
            setPassword={setPassword}
            handleSubmit={handleSubmit}
        />    
    </div>
  )
}

export default Register