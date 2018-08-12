import * as React from 'react';
import { hot } from 'react-hot-loader';
import BaseComponent from 'utils/base-component';
import { ITwoStateButtonItem } from 'components/two-state-button/two-state-button';
import { ICardProps } from 'components/card/card';
import { CardsPageView } from './cards-page.view';

import * as data from '../../data';

const mapBadges = (badges: data.IBadge[]) => badges.map(i => ({ caption: i.caption, checked: true }))

const getSelectedBadges = (buttons: ITwoStateButtonItem[], badges: data.IBadge[]) => {
  const result: data.IBadge[] = [];
  buttons.forEach((i, index) => {
    if (i.checked) {
      result.push(badges[index]);
    }
  });
  return result;
}

export interface ICardsPageProps {
  onNavigateToCard: (id: string) => void;
}

interface IBadges {
  sets: ITwoStateButtonItem[];
  categories: ITwoStateButtonItem[];
}

interface IState extends IBadges {
  selectedCards: ICardProps[];
}

export class CardsPage extends BaseComponent<ICardsPageProps, IState> {

  constructor(props: ICardsPageProps) {
    super(props);
    this.state = CardsPage.getDerivedStateFromProps();
  }

  public static getDerivedStateFromProps(): IState {
    return {
      sets: mapBadges(data.sets),
      categories: mapBadges(data.categories),
      selectedCards: data.cards,
    }
  }

  private filterCards = (): ICardProps[] => {
    const selectedSets = getSelectedBadges(this.state.sets, data.sets);
    const selectedCats = getSelectedBadges(this.state.categories, data.categories);
    return data.cards
      .filter(card => selectedSets.some(set => card.set === set.id))
      .filter(card => selectedCats.some(cat => card.categories.some(cardCat => cardCat === cat.id)))
      ;
  }

  private switchBadge = (name: keyof IBadges, index: number) => {
    const badges = this.state[name];
    badges[index].checked = !badges[index].checked;
    const x = {
      [name]: badges,
      selectedCards: this.filterCards(),
    };
    this.setState(x as Pick<IState, keyof IState>)
  }

  public render() {
    const p = this.props;
    return (
      <CardsPageView
        sets={this.state.sets}
        categories={this.state.categories}
        cards={this.state.selectedCards}
        onClickBadge={this.switchBadge}
        onClickCard={p.onNavigateToCard}
        onSelectCard={p.onNavigateToCard}
      />
    );
  }
}

export default hot(module)(CardsPage);
