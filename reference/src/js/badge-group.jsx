import React from 'react'
import Badge from './badge.jsx'

const BadgeGroup = (props) => {
  let badges = props.badges.map((el, i) => React.createElement(Badge, Object.assign(el, { key: i })))
  return (
    <div className="badge-group">
      <div className="badge-group-name">
        {props.name}
      </div>
      <div className="badge-group-body">
        {badges}
      </div>
    </div>
  )
}

export default BadgeGroup