import React from 'react'

const Home = (props) => {
    return (
        <div>
            <h3>{props.data.products.map(x => x.title)}</h3>
            <h3>{props.data.products.map(x => x.description)}</h3>
            <h3>{props.data.products.map(x => x.category)}</h3>
            <h3>{props.data.products.map(x => x.price)}</h3>
        </div>
    )
}

export default Home
