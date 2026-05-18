import React, { useState } from 'react'

const Form2 = () => {
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Submit = (e) => {
        e.preventDefault();
        if (!name) {
            alert("name is not defined")
        }
        else if (!mobile) {
            alert("mobile no. is not defined")
        }
        else if (!email) {
            alert("emai is not defined")
        }
        else if (!password) {
            alert("password is not defined")
            
        }
        const data = { name, mobile, email, password }
        localStorage.setItem("user", JSON.stringify(data))
        setName("")
        setMobile("")
        setEmail("")
        setPassword("")


    }

    return (
        <div>
            <form action="" onSubmit={Submit}>
                <label htmlFor="">enter your name</label><br />
                <input value={name} type="text" name='name' placeholder='name' onChange={(e) => setName(e.target.value)} />
                <br />
                <label htmlFor="">enter your mobile no.</label><br />
                <input value={mobile} type="tel" name='mobile' placeholder='mobile.no' onChange={(e) => setMobile(e.target.value)} />
                <br />
                <label htmlFor="">enter your email</label><br />
                <input value={email} type="email" name='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label htmlFor="">enter your password</label><br />
                <input value={password} type="password" name='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form2
