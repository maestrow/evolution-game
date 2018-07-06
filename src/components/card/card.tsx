import * as React from 'react'

const getImagePath = (key: string) => {
  return 'card-images/' + key.toLowerCase().replace(/ /g, '_') + '.svg'
}

export interface ICardProps {
  id: string;
  caption: string;
  description: string;
}

export const Card = (props: ICardProps) => {
  return (
    <div className="card">
      <div className="card__header">{props.caption}</div>
      <img className="card__image" src={getImagePath(props.id)} />
      <div className="card__body">{props.description}</div>
    </div>
  );
}

export default Card;
