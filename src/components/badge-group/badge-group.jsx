import React from 'react'
import Badge from '../badge/badge.jsx'

class BadgeGroup extends React.Component {

  constructor (props) {
    super (props)
  }

  render () {
    let badges = this.props.badges.map((el, i) => React.createElement(Badge, Object.assign(el, { 
      key: i,
      onBadgeClick: this.props.onSwitch.bind(this, el.id)
    })))
    return (
      <div className="badge-group">
        <div className="badge-group-name">
          {this.props.name}
        </div>
        <div className="badge-group-body">
          {badges}
        </div>
      </div>
    )
  }
}

export default BadgeGroup