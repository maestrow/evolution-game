import React from 'react'
import Autosuggest from 'react-autosuggest';
const data = require('../../data.js') // ToDo pass to ctor

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : data.cards.filter(card =>
    card.caption.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.caption;

export class Search extends React.Component {
  
  constructor () {
    super();
    this.state = {
      value: '',
      suggestions: []
    };
  }
  
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    console.log(suggestionValue);
  }

  renderSuggestion = (suggestion, { query, isHighlighted }) => {
    return (
      <div>
        {suggestion.caption}
      </div>
    );
  };

  render () {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Свойства через запятую',
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}