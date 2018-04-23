import React from 'react'
import { hot } from 'react-hot-loader'
import Cards from './cards.jsx'
import BadgeGroup from './badge-group.jsx'

let sets = [
  { caption: 'Базовый' },
  { caption: 'Время летать' },
  { caption: 'Подарочный' },
  { caption: 'Континенты' },
]

let categories = [
  { caption : 'Атака' },
  { caption : 'Защита' },
  { caption : 'Паразиты' },
  { caption : 'Питание' },
  { caption : '+n еды' },
  { caption : 'Парные' },
]

let cards = [
  { key: '1', caption: '111', description: '11111 1 11 1 1 1' },
  { key: '2', caption: '222', description: '22 22 2 22 2' },
  { key: '3', caption: '333', description: '33333 3 3 33' },
  { key: '4', caption: '444', description: '444 4 44 4 4 444' },
]

const Main = (props) => {
  return (
    <div className="root">
      <div className="badge-groups">
        <BadgeGroup name="Наборы:" badges={sets} />
        <BadgeGroup name="Категории:" badges={categories} />
      </div>
      <Cards cards={cards}/>
    </div>
  )
}

export default hot(module)(Main)