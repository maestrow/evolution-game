import * as React from 'react'
import { ICardProps, Card } from '../card/card'

export interface ICards {
  items: Array<ICardProps>;
}

export class Cards extends React.Component<ICards> {

  public render() {
    return (
      <div className="cards">
        {this.props.items.map(card => <Card key={card.id} {...card} />)}
      </div>
    )
  }
}

export default Cards;
