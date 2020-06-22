import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'
import Home from './Home'

export default class App extends Component {
  render() {
    return <Home />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
