import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h3> <Link to="/tag">tag</Link></h3>
            <h3> <Link to="/category">category</Link></h3>
            <h3> <Link to="/review">review</Link></h3>

        </div>
    )
}

export default Header
