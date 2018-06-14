import React from 'react'
import Card from '../card/card.jsx'

class Cards extends React.Component {
  
  constructor (props) {
    super (props)
    this.state = this.constructor.getDerivedStateFromProps(props, {})
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      cards: nextProps.cards.filter(card => 
        nextProps.sets[card.set] 
        && (!card.cat || card.cat.some(cat => nextProps.categories[cat])))
    }
  }

  render () {
    let cards = this.state.cards.map((el, i) => React.createElement(Card, el))
    return (
      <div className="cards">
        {cards}
      </div>
    )
  }
}

export default Cards