import React from 'react'
import { data } from 'react-router-dom'

const Tag = (props) => {
    console.log(",,,",props.data.products)
    return (
        <div>
          <h1>{props.data,products.map((e)=>
            return {e.id}
          )}</h1>
         
        </div>
    )
}

export default Tag
