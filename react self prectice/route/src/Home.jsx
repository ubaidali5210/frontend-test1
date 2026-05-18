import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>its a home page</h1>
            <Link to={'/about'}>about</Link>
            <Link to={'/contact'}>contact</Link>
        </div>
    )
}

export default Home
