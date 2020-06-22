import React, { Component } from 'react'
import { NavBar, SearchBar } from 'antd-mobile'
import Img from './Img'
import '../assets/style/header.less'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavBar leftContent={[<Img key="0" src="logo.png" height={30} />]}>
          <SearchBar placeholder="搜索" maxLength={8} />
        </NavBar>
      </div>
    )
  }
}
