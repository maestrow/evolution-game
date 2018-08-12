import * as React from 'react';
import BaseComponent from 'utils/base-component';
import { CardInfo } from 'components/card-info/card-info';
import { ICardProps } from 'components/card/card';
import { SearchCards } from 'components/search-cards/search-cards';

export interface ICardPageViewProps {
  card: ICardProps;
  description: string;
  onNavigateBack: () => void;
  onNavigateToCard: (cardId: string) => void;
}

export class CardPageView extends BaseComponent<ICardPageViewProps, never> {

  constructor(props: ICardPageViewProps) {
    super(props);
  }

  private handleClickBack = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    this.props.onNavigateBack();
  }

  public render() {
    const p = this.props;
    const cssClasses = this.getCssClasses(['header-container', 'header', 'back-link']);
    return (
      <div
        className={this.cssRoot}
      >
        <div className={cssClasses['header-container']}>
          <a
            href=""
            className={cssClasses['back-link']}
            onClick={this.handleClickBack}
          >
            <img src="/icons/arrow_back.svg" />
          </a>
          <h1 className={cssClasses.header}>{p.card.caption}</h1>
          <SearchCards onSelect={p.onNavigateToCard} />
        </div>
        <CardInfo
          card={p.card}
          description={p.description}
        />
      </div>
    );
  }
}
