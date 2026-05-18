import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to={'/form'}> form</Link>
            <Link to={'/calculator'}> calculator</Link>
            <Link to={'/signup'}> signup</Link>
            <Link to={'/signup2'}> signup2</Link>
            <Link to={'/login'}> login</Link>
            <Link to={'/login2'}> login2</Link>
        </div>
    )
}

export default Header
