Hi

```js
class Sample extends React.Component {
  
  constructor () {
    this.state = {
      checked: false
    }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick () { 
    this.setState({checked: !this.state.checked}); 
  };

  render () {
    return (
      <Badge
        caption="push me"
        checked={this.state.checked}
        onClick={this.handleClick}
      />
    );
  };
}

<Sample />
```