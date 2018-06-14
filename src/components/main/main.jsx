import React from 'react'
import { hot } from 'react-hot-loader'
import Cards from '../cards/cards.jsx'
import BadgeGroup from '../badge-group/badge-group.jsx'
const data = require('../../data.js') // ToDo pass to ctor

let getNewObjWith = (arr, value) => arr.map(i => i.id).reduce((acc, i) => {
  acc[i] = value
  return acc
}, {})

class Main extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      sets: getNewObjWith(data.sets, true),
      categories: getNewObjWith(data.categories, true)
    }
  }

  onBadgeSwitch (groupName, badge) {
    let diff = {}
    let group = diff[groupName] = this.state[groupName]
    group[badge] = !group[badge]
    this.setState(diff)
  }

  render () {
    
    return (
      <div className="root">
        <div className="badge-groups">
          <BadgeGroup name="Наборы:" badges={data.sets} onSwitch={this.onBadgeSwitch.bind(this, 'sets')} />
          <BadgeGroup name="Категории:" badges={data.categories} onSwitch={this.onBadgeSwitch.bind(this, 'categories')} />
        </div>
        <Cards cards={data.cards} sets={this.state.sets} categories={this.state.categories} />
      </div>
    )
  }

}

export default hot(module)(Main)