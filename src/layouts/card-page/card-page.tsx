import * as React from 'react';
import { hot } from 'react-hot-loader';
import BaseComponent from 'utils/base-component';
import * as data from '../../data';
import { CardPageView } from './card-page.view';

export interface ICardPageProps {
  cardId: string;
  onNavigateBack: () => void;
  onNavigateToCard: (cardId: string) => void;
}

interface IState {
  card?: data.ICard;
}

const getCardById = (id: string) => {
  return data.cards.find(i => i.id === id);
}

class CardPage extends BaseComponent<ICardPageProps, IState> {

  constructor(props: ICardPageProps) {
    super(props);
    this.state = CardPage.getDerivedStateFromProps(props)
  }

  public static getDerivedStateFromProps(props: ICardPageProps): IState {
    return {
      card: getCardById(props.cardId),
    }
  }

  public render() {
    return this.state.card === undefined ? (
      <div>Свойство не найдено</div>
    ) : (
      <CardPageView
          card={this.state.card}
          description={'wepfokwpeofk pwoek fpowk efpow epofk wpoekf pwoek fpowek fpok pok pwoek f'}
          onNavigateBack={this.props.onNavigateBack}
          onNavigateToCard={this.props.onNavigateToCard}
      />
    );
  }
}

export default hot(module)(CardPage);
