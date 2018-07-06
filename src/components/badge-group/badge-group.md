Hi

```js

const items = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
].map(i => ({ caption: i }));

class Sample extends React.Component {
  
  constructor () {
    this.state = {
      items,
    }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick (index, item) { 
    const newItems = Object.assign([], items);
    newItems[index].checked = !item.checked;
    this.setState({items: newItems}); 
  };

  render () {
    return (
      <BadgeGroup
        name="Days"
        items={this.state.items}
        onClick={this.handleClick}
      />
    );
  };
}

<Sample />
```