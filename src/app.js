import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/main/main.jsx'

window.onload = () => {
  ReactDOM.render(<Main />, document.getElementById('app'))
}
