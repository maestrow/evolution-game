import React from 'react'

const Card = (props) => (
  <div className="card">
    <div className="card__header">{props.caption}</div>
    <div className="card__body">{props.description}</div>
  </div>
)

export default Card