import * as React from 'react';
import * as cn from 'classnames';
import BaseComponent from 'utils/base-component';
import { CardInfo } from 'components/card-info/card-info';
import { ICardProps } from 'components/card/card';
const data = require('src/data.js') as ICardProps[];

const getCardById = (id: string) => {
  return data.find(i => i.id === id);
}

export interface ICardPageProps {
  className?: string;
  cardId: string;
}

export class CardPage extends BaseComponent<ICardPageProps, never> {

  constructor(props: ICardPageProps) {
    super(props);
  }

  public render() {
    const classNames = cn(this.cssRoot, this.props.className);
    const card = getCardById(this.props.cardId);
    return (
      <div
        className={classNames}
      >
        Hello from CardPage
        {card === undefined
          ? <div>Такого свойства не существует</div>
          : (
            <CardInfo
              card={card}
              description="eirojoigj oeirjg oier goiej roigj eoirjg oiej org"
            />
          )
        }
      </div>
    );
  }
}
