import React, { Component } from 'react'

import '../assets/style/formInput.less'
import '../assets/fonts/iconfont.css'

export default class FormInput extends Component {
  render() {
    return (
      <div className="input-group">
        <label form={this.props.formId}>
          <i className={`iconfont icon-${this.props.iconclass}`}></i>
        </label>
        <input
          type={this.props.type}
          id={this.props.formId}
          placeholder={this.props.pltext}
        />
      </div>
    )
  }
}
