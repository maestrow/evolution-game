TwoStateButton sample:

```js
class Sample extends React.Component {
  
  constructor () {
    this.state = {
      checked: false
    }
    this.onClick = this.onClick.bind(this);
  };

  onClick () { 
    this.setState({checked: !this.state.checked}); 
  };

  render () {
    return (
      <TwoStateButton
        caption="push me"
        checked={this.state.checked}
        onClick={this.onClick}
      />
    );
  };
}

<Sample />
```