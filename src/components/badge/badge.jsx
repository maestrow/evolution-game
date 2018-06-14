import React from 'react'
import classNames from 'classnames'

class Badge extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      enabled: this.props.enabled !== false,
      highlited: false
    }
  }
  
  onClick () {
    this.setState ({ enabled: !this.state.enabled })
    this.props.onBadgeClick()
  }

  onMouseEnter () {
    this.setState ({ highlited: true })
  }

  onMouseLeave () {
    this.setState ({ highlited: false })
  }
  
  render () {
    let styleClasses = classNames({
      'badge': true,
      'badge--highlighted': this.state.highlited,
      'badge--disabled': !this.state.enabled
    })
    return (
      <div 
        className={styleClasses} 
        onClick={this.onClick.bind(this)} 
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
        >
        {this.props.caption}
      </div>
    )
  }

}

export default Badge