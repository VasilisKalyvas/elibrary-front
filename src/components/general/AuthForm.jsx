import React from 'react'
import { Link } from 'react-router-dom'

const AuthForm = ({
    title,
    isLogin = true,
    email,
    setEmail,
    username,
    setUsename,
    password,
    setPassword,
    handleSubmit
}) => {
  return (
    <div className="md:w-[400px] w-[300px] p-6 m-auto bg-white rounded-md shadow-md">
            <h1 className="text-3xl font-semibold text-center text-[#37475a]">
                {title}
            </h1>
            <div className="mt-6">
                {
                    !isLogin
                    ?
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Name
                            </label>
                            <input
                                value={username}
                                onChange={(e) => setUsename(e.target.value)}
                                type="text"
                                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                            />
                        </div>
                    : null
                }
                <div className="mb-2">
                    <label
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Email
                    </label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                    />
                </div>
                <div className="mb-2">
                    <label
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Password
                    </label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                    />
                </div>
                <div className="mt-6">
                    <button
                        onClick={handleSubmit} 
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-[#37475a]">
                        {title}
                    </button>
                </div>
            </div>
            <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
                {isLogin ? `Don't have an account yet ? ` : `Already have an account?`}
                <Link
                    to={isLogin ? '/register' : '/login'}
                    className="font-medium text-blue-600 hover:underline"
                >
                    {isLogin ? 'Register' : 'Login'} here!
                </Link>
            </p>
        </div>
  )
}

export default AuthForm