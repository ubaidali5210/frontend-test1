import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [terms, setTerms] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, password, email, phone, gender, country, terms };
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data))
        alert('Saved successfully ✅');
        setName('');
        setPassword('');
        setEmail('');
        setPhone('');
        setGender('');
        setCountry('');
        setTerms(false);
    };
    

    return (
        <div className="form-container">
            <form className="form-box" onSubmit={handleSubmit}>
                <h2 className="form-title">Sign Up</h2>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        id="phone"
                        type="tel"
                        placeholder="Enter your number"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </div>

                <fieldset className="form-group">
                    <legend>Gender</legend>
                    <div className="radio-group">
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            checked={gender === "male"}
                            onChange={e => setGender(e.target.value)}
                        />
                        <label htmlFor="male">Male</label>

                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            checked={gender === "female"}
                            onChange={e => setGender(e.target.value)}
                        />
                        <label htmlFor="female">Female</label>
                    </div>
                </fieldset>

                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select
                        id="country"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    >
                        <option value="">--Select--</option>
                        <option value="india">India</option>
                        <option value="uk">UK</option>
                        <option value="us">US</option>
                    </select>
                </div>

                <div className="form-group checkbox-group">
                    <input
                        type="checkbox"
                        id="terms1"
                        // checked={terms}
                        onChange={e => setTerms(e.target.checked)}
                    />
                    <label htmlFor="terms">I agree to the Terms & Conditions</label>

                    <input
                        type="checkbox"
                        id="terms2"
                        // checked={terms}
                        onChange={e => setTerms(e.target.checked)}
                    />
                    <label htmlFor="terms">privacy policy</label>
                </div>

                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    );
};

export default Form;
