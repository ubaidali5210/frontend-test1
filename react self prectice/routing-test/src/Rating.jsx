import React from 'react'

const Rating = (props) => {
  return (
    <div>
      <h3>{props.data.product.map(x=>x.rating)}</h3>
    </div>
  )
}

export default Rating
