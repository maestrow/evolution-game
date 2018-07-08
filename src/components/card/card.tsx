import * as React from 'react'

const getImagePath = (key: string) => {
  return 'card-images/' + key.toLowerCase().replace(/ /g, '_') + '.svg'
}

export interface ICardProps {
  id: string;
  caption: string;
  description: string;
  onClick?: (id: string) => void;
}

export class Card extends React.Component<ICardProps, never> {

  private handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (this.props.onClick) {
      const id = event.currentTarget.dataset.id || '';
      this.props.onClick(id);
    }
  }

  public render() {
    const p = this.props;
    const caption = p.onClick ? (<a onClick={this.handleClick} data-id={p.id}>{p.caption}</a>) : p.caption;
    return (
      <div>
        <div className="card__header">{caption}</div>
        <img className="card__image" src={getImagePath(p.id)} />
        <div className="card__body">{p.description}</div>
      </div>
    );
  }
}

export default Card;
