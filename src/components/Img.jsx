import React, { Component } from 'react'

export default class Img extends Component {
  render() {
    return (
      <div className="img_div">
        <img
          src={require('../assets/image/' + this.props.src)}
          alt="logo"
          height={this.props.height}
        />
      </div>
    )
  }
}
