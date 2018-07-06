import * as React from 'react'
const Autosuggest = require ('react-autosuggest');

export interface ISearchProps<TItem> {
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
      placeholder: 'Свойства через запятую',
      value,
      onChange: this.onChange,
    };

    return (
      <Autosuggest
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
