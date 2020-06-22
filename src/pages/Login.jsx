import React, { Component } from 'react'
import '../assets/style/login.less'

import Img from '../components/Img'
import FormInput from '../components/FormInput'
import FormBtn from '../components/FormBtn'

export default class Login extends Component {
  render() {
    return (
      <div className="login_page">
        <Img src="logo.png" />
        <form className="login_form">
          <FormInput
            type="text"
            formId="username"
            pltext="用户名"
            iconclass="shouji"
          />
          <FormInput
            type="password"
            formId="password"
            pltext="密码"
            iconclass="mima"
          />
          <FormBtn isFull={true}>登录</FormBtn>
          <FormBtn type="ordinary">忘记密码</FormBtn>
          <FormBtn>免费组册</FormBtn>&emsp;
          <FormBtn>游客登录</FormBtn>
        </form>
      </div>
    )
  }
}
