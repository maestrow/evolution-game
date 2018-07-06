import * as React from 'react';
import * as cn from 'classnames';
import BaseComponent from 'utils/base-component';
import Card, { ICardProps } from 'components/card/card';

export interface ICardInfoProps {
  card: ICardProps,
  description: string;
}

export class CardInfo extends BaseComponent<ICardInfoProps, never> {

  constructor(props: ICardInfoProps) {
    super(props);
  }

  public render() {
    const classNames = cn(this.cssRoot);
    return (
      <div
        className={classNames}
      >
        <Card {...this.props.card} />
        <div>{this.props.description}</div>
      </div>
    );
  }
}
