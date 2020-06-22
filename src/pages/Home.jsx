import React, { Component } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Subject from '../components/Subject'

export default class Home extends Component {
  render() {
    return (
      <div className="home_page">
        <Header />
        <Banner />
        <Subject />
      </div>
    )
  }
}
