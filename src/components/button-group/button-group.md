ButtonGroup sample:

```js
const items = [
  { caption: 'one' },
  { caption: 'two'},
  { caption: 'three'},
];

class Sample extends React.Component {

  constructor () {
    this.state = {
      items: items
    }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick (index, item) { 
    this.state.items[index].checked = !item.checked;
    this.setState({items}); 
  };

  render () {
    return (
      <ButtonGroup
        items={this.state.items}
        onClick={this.handleClick}
      />
    );
  };
}

<Sample />
```