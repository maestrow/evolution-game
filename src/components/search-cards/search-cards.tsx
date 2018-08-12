import * as React from 'react';
import * as cn from 'classnames';
import BaseComponent from 'utils/base-component';
import { Search } from '../search/search';
import * as data from '../../data';
import { defaultTheme } from 'components/search/search';

const getCardsSuggestions = (value: string): data.ICard[] => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : data.cards.filter(card =>
    card.caption.toLowerCase().slice(0, inputLength) === inputValue,
  );
};

const getCardValue = (suggestion: data.ICard) => suggestion.caption;

export interface ISearchCardsProps {
  className?: string;
  theme?: any;
  onSelect: (cardId: string, value: string) => void;
}

export class SearchCards extends BaseComponent<ISearchCardsProps, never> {

  private theme = {
    ...defaultTheme,
    container: this.cssRoot,
  };

  private handleSelect = (card: data.ICard, value: string) => {
    this.props.onSelect(card.id, value);
  }

  public render() {
    const classNames = cn(this.cssRoot, this.props.className);
    return (
      <Search
        placeholder="Быстрый переход"
        className={classNames}
        theme={{...this.theme, ...this.props.theme}}
        getSuggestions={getCardsSuggestions}
        getSuggestionValue={getCardValue}
        onSelect={this.handleSelect}
      />
    );
  }
}
