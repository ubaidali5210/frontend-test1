import React from 'react'
import { Link } from 'react-router-dom'

const Child1 = (props) => {
    return (
        <div>
            <h1>hello,{props.any}</h1>
            <Link to="/
            ">about</Link>
            {/* <h1>Child1 */}

            {/* </h1> */}
        </div>
    )
}

export default Child1
