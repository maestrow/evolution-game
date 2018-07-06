Search:

```js
const data = require('../../data.js')

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : data.cards.filter(card =>
    card.caption.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = (suggestion) => suggestion.caption;

class Sample extends React.Component {
  
  constructor () {
    super ();
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect (item, value) {
    console.log(item);
    alert (value);
  }
  
  render () {
    return (
      <Search 
        getSuggestions={getSuggestions}
        getSuggestionValue={getSuggestionValue}
        onSelect={this.handleSelect}
      />
    );
  }
}

<Sample />
```