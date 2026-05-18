import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const Submit = (e) => {
        e.preventDefault();
        console.log(name, password, phone)
    }
    return (
        <div>
            <form action="" onSubmit={Submit}>
                <label htmlFor="">enter your name</label>
                <input type="text" name='name' placeholder='username' onChange={(e) => setName(e.target.value)} />
                <br />
                <label htmlFor="">enter your password</label>
                <input type="password" name='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <br />
                <label htmlFor="">enter your phone number</label>
                <input type="tel" name='phone' placeholder='phone number'
                    onChange={(e) => setPhone(e.target.value)} />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form
