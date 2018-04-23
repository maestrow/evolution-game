import React from 'react'
import Card from './card.jsx'

const Cards = (props) => {
  let cards = props.cards.map((el, i) => React.createElement(Card, el))
  return (
    <div className="cards">
      {cards}
    </div>
  )
}

export default Cards