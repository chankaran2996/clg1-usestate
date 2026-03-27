import React, { useState } from 'react'

const LoginPage = () => {
    const [loginData , setLoginData] = useState({
        email : "",
        password : ""
    })
    const [error , setError] = useState("")

    const handileSubmit = (e) => {
        e.preventDefault();
        if(loginData.email === "" || loginData.password === ""){
            setError("Please fill all the fields")
            return;
        }
        setError("")
        console.log("Email : " , loginData.email)
        console.log("Password : " , loginData.password)
    }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handileSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                type="text"
                placeholder="Enter your username"
            />
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                type="password"
                placeholder="Enter your password"
            />
            </div>
            {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
            <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Sign In
            </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage