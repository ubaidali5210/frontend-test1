import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(password, email)
        const result = JSON.parse(localStorage.getItem('user'))

        if (result === null) {
            alert('sign up first')
        }

        else if (result.email !== email && result.password === password) {
            alert('wrong email')
        }

        else if (result.email === email && result.password !== password) {
            alert('wrong password')
        }



        else if (result.email === email && result.password === password) {
            alert('login successfully')
        }

        else {
            alert('login failed')
        }
        

    }

    const logout = () => {
        localStorage.clear()
    }
    return (
        <div className="form-container">
            <form className="form-box" onSubmit={handleSubmit}>
                <h2 className="form-title">Sign Up</h2>


                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="Enter your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="Enter your email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit" className="form-button">Submit</button>

                <button onClick={logout}>Log-out</button>
            </form>
        </div>
    )
}

export default Form