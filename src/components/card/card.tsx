import * as React from 'react'
import BaseComponent from 'utils/base-component';

const getImagePath = (key: string) => {
  return '/card-images/' + key.toLowerCase().replace(/ /g, '_') + '.svg'
}

export interface ICardProps {
  id: string;
  caption: string;
  description: string;
  onClick?: (id: string) => void;
}

export class Card extends BaseComponent<ICardProps, never> {

  private handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (this.props.onClick) {
      const id = event.currentTarget.dataset.id || '';
      this.props.onClick(id);
    }
  }

  public render() {
    const p = this.props;
    const caption = p.onClick ? (<a href="" onClick={this.handleClick} data-id={p.id}>{p.caption}</a>) : p.caption;
    return (
      <div className={this.cssRoot}>
        <div className="card__header">{caption}</div>
        <img className="card__image" src={getImagePath(p.id)} />
        <div className="card__body">{p.description}</div>
      </div>
    );
  }
}

export default Card;
