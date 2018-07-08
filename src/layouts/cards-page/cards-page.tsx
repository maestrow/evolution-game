import * as React from 'react';
import * as cn from 'classnames';
import BaseComponent from 'utils/base-component';
import { ICardProps } from 'components/card/card';
import { Cards } from 'components/cards/cards';
const data = require('src/data.js') as ICardProps[];

export interface ICardsPageProps {
  className?: string;
}

export class CardsPage extends BaseComponent<ICardsPageProps, never> {

  constructor(props: ICardsPageProps) {
    super(props);
  }

  private handleClick = (id: string) => {
    // ToDo: navigate to id;
  }

  public render() {
    const classNames = cn(this.cssRoot, this.props.className);
    return (
      <div
        className={classNames}
      >
        Hello from CardsPage
        <Cards
          items={data}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
