import React from 'react'
import { Link } from 'react-router-dom'

const BodyAbout = (props) => {
  return (
    <div>
      <h3>{props.about.map(x => x.job)}</h3>
      <h3>{props.about.map(x => x.schooling)}</h3>
      <h3><Link to="/contact">contact</Link ></h3>

    </div>
  )
}

export default BodyAbout
