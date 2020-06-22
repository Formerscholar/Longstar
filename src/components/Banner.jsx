import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import banner1 from '../assets/image/banner1.png'
import banner2 from '../assets/image/banner2.png'
import banner3 from '../assets/image/banner3.png'
import '../assets/style/banner.less'

class Banner extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: [banner1, banner2, banner3],
      })
    }, 100)
  }
  render() {
    return (
      <Carousel
        autoplay
        infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={(index) => console.log('slide to', index)}
      >
        {this.state.data.map((val) => (
          <a
            key={val}
            href="#"
            style={{
              display: 'inline-block',
              width: '100%',
              height: this.state.imgHeight,
            }}
          >
            <img
              src={val}
              alt="banner-img"
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                window.dispatchEvent(new Event('resize'))
                this.setState({ imgHeight: 'auto' })
              }}
            />
          </a>
        ))}
      </Carousel>
    )
  }
}

export default Banner
