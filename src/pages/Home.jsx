import React, { Component } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Subject from '../components/Subject'
import { Tabs, Flex, List } from 'antd-mobile'
import Img from '../components/Img'
import '../assets/style/home.less'

const Item = List.Item
const tabs = [{ title: '产品' }, { title: '出行' }, { title: '深度' }]

const sub_list_data = [
  {
    img: 't0110974b6f051c1e5a.gif',
    title: '用于构建用户界面的 JavaScript 库',
    des:
      '组件逻辑使用 JavaScript 编写而非模版，你可以轻松地在应用中传递数据，并使得状态与 DOM 分离',
  },
  {
    img: 't0177ec8627c04e438b.gif',
    title: '渐进式的JavaScript 框架',
    des: '不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩',
  },
  {
    img: 't0135a6567622271196.gif',
    title: '一套框架多种平台 移动端&桌面端',
    des: '学会用 Angular 构建应用，把这些代码和能力复用在多种不同平台的应用上',
  },
  {
    img: 't0110974b6f051c1e5a.gif',
    title: '用于构建用户界面的 JavaScript 库',
    des:
      '组件逻辑使用 JavaScript 编写而非模版，你可以轻松地在应用中传递数据，并使得状态与 DOM 分离',
  },
  {
    img: 't0177ec8627c04e438b.gif',
    title: '渐进式的JavaScript 框架',
    des: '不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩',
  },
]

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sub_list_data,
    }
  }
  render() {
    return (
      <div className="home_page">
        <Header />
        <Banner />
        <Subject />
        <div className="sub_list">
          <div className="sub_header">相关咨询</div>
          {this.state.sub_list_data.map((item, index) => {
            return (
              <div className="listItem" key={index}>
                <Flex>
                  <Flex.Item className="listItem_left">
                    <Img src={item.img} height={80} />
                  </Flex.Item>
                  <Flex.Item>
                    <h3>{item.title}</h3>
                    <p>{item.des}</p>
                  </Flex.Item>
                </Flex>
              </div>
            )
          })}
        </div>

        <div className="tab">
          <Tabs tabs={tabs} initialPage={0} animated useOnPan>
            <div>
              <List className="my-list">
                <Item arrow="horizontal">
                  小米有品推出小寻定位书包 拥有8重定位系统
                </Item>
                <Item arrow="horizontal">
                  小米有品推出小寻定位书包 拥有8重定位系统
                </Item>
                <Item arrow="horizontal">
                  小米有品推出小寻定位书包 拥有8重定位系统
                </Item>
                <Item arrow="horizontal">
                  小米有品推出小寻定位书包 拥有8重定位系统
                </Item>
                <Item arrow="horizontal">
                  小米有品推出小寻定位书包 拥有8重定位系统
                </Item>
              </List>
            </div>
            <div>Content of second tab</div>
            <div>Content of third tab</div>
          </Tabs>
        </div>
      </div>
    )
  }
}
