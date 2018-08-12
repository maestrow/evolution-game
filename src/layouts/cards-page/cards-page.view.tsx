import * as React from 'react';
import BaseComponent from 'utils/base-component';
import { Cards } from 'components/cards/cards';
import BadgeGroup from 'components/badge-group/badge-group';
import { ICardProps } from 'components/card/card';
import { ITwoStateButtonItem } from 'components/two-state-button/two-state-button';
import { SearchCards } from 'components/search-cards/search-cards';

export interface ICardsPageViewProps {
  sets: ITwoStateButtonItem[],
  categories: ITwoStateButtonItem[],
  cards: ICardProps[],
  onClickBadge: (badgeGroupName: 'sets' | 'categories', index: number) => void;
  onClickCard: (id: string) => void;
  onSelectCard: (cardId: string) => void;
}

export class CardsPageView extends BaseComponent<ICardsPageViewProps, never> {

  private handleClickSet = (index: number) => {
    this.props.onClickBadge('sets', index);
  }

  private handleClickCategory = (index: number) => {
    this.props.onClickBadge('categories', index);
  }

  public render() {
    const p = this.props;
    const cssClasses = this.getCssClasses(['search', 'badge-groups']);

    return (
      <div
        className={this.cssRoot}
      >
        <div className={cssClasses['badge-groups']}>
          <BadgeGroup name="Наборы:" items={this.props.sets} onClick={this.handleClickSet} />
          <BadgeGroup name="Категории:" items={this.props.categories} onClick={this.handleClickCategory} />
          <SearchCards onSelect={p.onSelectCard} />
        </div>
        <Cards
          items={p.cards}
          onClick={p.onClickCard}
        />
      </div>
    );
  }
}
