import React from 'react'

const Review = (props) => {
  return (
    <div>
      <h3>{props.data.product.map(x=>x.reviews)}</h3>
    </div>
  )
}

export default Review
