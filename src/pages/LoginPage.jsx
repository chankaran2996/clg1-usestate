import React, { useState } from 'react'

const LoginPage = () => {
    // const [usename, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)

    const handleLogin = async (e) => {
        console.log('Login data:', loginData)
        e.preventDefault()
        setError(null)
        setLoginData({
            email: '',
            password: ''
        })

    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                />
            </div>
            {error && <p>{error}</p>}
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default LoginPage