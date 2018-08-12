import * as React from 'react'
const Autosuggest = require ('react-autosuggest');

export const defaultTheme = {
  container:                'react-autosuggest__container',
  containerOpen:            'react-autosuggest__container--open',
  input:                    'react-autosuggest__input',
  inputOpen:                'react-autosuggest__input--open',
  inputFocused:             'react-autosuggest__input--focused',
  suggestionsContainer:     'react-autosuggest__suggestions-container',
  suggestionsContainerOpen: 'react-autosuggest__suggestions-container--open',
  suggestionsList:          'react-autosuggest__suggestions-list',
  suggestion:               'react-autosuggest__suggestion',
  suggestionFirst:          'react-autosuggest__suggestion--first',
  suggestionHighlighted:    'react-autosuggest__suggestion--highlighted',
  sectionContainer:         'react-autosuggest__section-container',
  sectionContainerFirst:    'react-autosuggest__section-container--first',
  sectionTitle:             'react-autosuggest__section-title'
};

export interface ISearchProps<TItem> {
  className?: string;
  placeholder?: string;
  theme?: any;
  getSuggestions: (search: string) => Array<TItem>;
  getSuggestionValue: (item: TItem) => string;
  onSelect: (item: TItem, value: string) => void;
}

export interface IState<TItem> {
  value: string;
  suggestions: Array<TItem>;
}

export class Search<TItem> extends React.Component<ISearchProps<TItem>, IState<TItem>> {

  constructor(props: ISearchProps<TItem>) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
    };
  }

  protected onChange = (event: any, { newValue }: any) => {
    this.setState({
      value: newValue,
    });
  };

  protected onSuggestionsFetchRequested = ({ value }: any) => {
    this.setState({
      suggestions: this.props.getSuggestions(value),
    });
  };

  protected onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  protected onSuggestionSelected = (
    event: any,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }: any,
  ) => {
    this.props.onSelect(suggestion, suggestionValue);
  }

  protected renderSuggestion = (suggestion: TItem) => {
    return (
      <div>
        {this.props.getSuggestionValue(suggestion)}
      </div>
    );
  };

  public render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: this.props.placeholder,
      value,
      onChange: this.onChange,
    };

    return (
      <Autosuggest
        className={this.props.className}
        theme={this.props.theme}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={this.props.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}
