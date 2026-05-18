import React, { useState } from 'react'

const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const Submit = (e) => {
        e.preventDefault();
        const data = { name, password, phone, email }
        const res = JSON.parse(localStorage.getItem("user"))
        console.log(">>>>>>>>>>>>>", res)
    }
    return (
        <div>
            <form action="" onSubmit={Submit}>
                <label htmlFor="">enter your name</label><br />
                <input type="text" placeholder='name' onChange={e => setName = (e.target.value)} />
                <br />
                <label htmlFor="">enter your password</label><br />
                <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
                <br />
                <label htmlFor="">enter your phone no.</label><br />
                <input type="tel" placeholder='phone' onChange={e => setPhone(e.target.value)} />
                <br />
                <label htmlFor="">enter your email</label><br />
                <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)} />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login
