import React, { Component } from 'react'
import '../assets/style/formbtns.less'

export default class FormBtn extends Component {
  render() {
    return this.props.type == 'ordinary' ? (
      <a href="#">{this.props.children}</a>
    ) : (
      <button className={this.props.isFull ? 'btn full' : 'btn'}>
        {this.props.children}
      </button>
    )
  }
}
