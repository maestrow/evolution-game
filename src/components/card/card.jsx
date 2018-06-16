import React from 'react'

const getImagePath = (key) => {
  return 'card-images/' + key.toLowerCase().replace(/ /g, '_') + '.svg'
}

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__header">{props.caption}</div>
      <img className="card__image" src={getImagePath(props.id)} />
      <div className="card__body">{props.description}</div>
    </div>
  );
}

export default Card