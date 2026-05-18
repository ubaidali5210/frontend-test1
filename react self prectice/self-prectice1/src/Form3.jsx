import React, { useState } from 'react'

const Form3 = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const submit = (e) => {
        e.preventDefault()
        const data = { name, phone, password, email }
        localStorage.setItem("user", JSON.stringify(data))
        setName("")
        setPhone("")
        setPassword("")
        setEmail("")

    }
    return (
        <div>
            <form action="" onSubmit={submit}>
                <input type="text" value={name} name='name' placeholder='name' onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="tel" value={phone} name='phone' placeholder='phone' onChange={(e) => setPhone(e.target.value)} />
                <br />
                <input type="password" value={password} name='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <br />
                <input type="email" value={email} name='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form3
