import React from 'react'

const Card = (props) => (
  <div className="card">
    <div className="card-header">{props.caption}</div>
    <div className="card-body">{props.description}</div>
  </div>
)

export default Card