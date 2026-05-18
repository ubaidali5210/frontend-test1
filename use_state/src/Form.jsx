import React from 'react'
import { useState } from 'react'
import './Form.css'

const Form = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, password, email, phone)

        const data = {
            name, password, email, phone
        }
        console.log(data)
        alert('save successfully')
        setName('')
        setPassword('')
        setEmail('')
        setPhone('')


    }
    return (
        <div className="form-container">
            <form className="form-box" onSubmit={handleSubmit}>
                <h2 className="form-title">Sign Up</h2>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Enter your name"
                        value={name}
                        onChange={e => setName(e.target.value)} />

                </div>

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

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" type="tel" placeholder="Enter your number"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </div>

                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    )
}

export default Form
// chackbox, drop down, radio button