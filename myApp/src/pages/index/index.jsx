import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import { AtSearchBar, AtGrid, AtList, AtListItem } from 'taro-ui'
import image from './img'
import './index.less'
const { chuzu, cityOne, livable, line, Salitun, imgone, imgTwo, imgThree, imgFour } = image
export default class Index extends Component {
  state = {
    value: '',
    current: 0,
    images: [{
      id: 1,
      url: 'https://m4.tuniucdn.com/fb2/t1/G7/M00/11/E6/CkC9Y2GTdwqICSDOABbhjrcTw04AAGmIAPH3IUAFuGm299.png'
    }, {
      id: 2,
      url: 'https://m2.tuniucdn.com/fb2/t1/G7/M00/0C/7D/CkC9r2D2gKmIEQ3KAAtyQacnYzcAAFBlwFWqO0AC3JZ67.jpeg'
    }, {
      id: 3,
      url: 'https://m3.tuniucdn.com/fb2/t1/G7/M00/0F/C6/CkC9r2FSt1aIPFRoAAat-evL1asAAF2BwMCEMEABq4R95.jpeg'
    }, {
      id: 4,
      url: 'https://m4.tuniucdn.com/fb2/t1/G7/M00/11/57/CkC9r2F6SAGIHa3FABUNkFH3rYkAAGQsAFg9_oAFQ2o117.png'
    }, {
      id: 5,
      url: 'https://m2.tuniucdn.com/fb2/t1/G7/M00/11/BF/CkC9r2GMtDaIL7E2AAgZbh9CRe4AAGgfwIG-vYACBmG88.jpeg'
    }],
    Nav: [{
      image: imgone,
      value: '整租'
    }, {
      image: imgTwo,
      value: '合租'
    }, {
      image: imgThree,
      value: '地图找房'
    }, {
      image: imgFour,
      value: '去出租'
    }],
    recomment: [{
      title: '家住回龙观<br/>归属的感觉',
      image: cityOne
    }, {
      title: '宜居四五环<br/>大都市生活',
      image: livable
    }, {
      title: '家住回龙观<br/>归属的感觉',
      image: Salitun
    }, {
      title: '家住回龙观<br/>归属的感觉',
      image: line
    }]
  }
  Change = (value) => {
    this.setState({ value: value })
  }
  BotmNav = (current) => {
    this.setState({ current: current })
    Taro.navigateTo({ url: 'pages/about/index' })
  }
  render() {
    return (
      <View className='index'>
        <AtSearchBar className='Search' placeholder='搜索一下' fixed onChange={this.Change} value={this.state.value} ></AtSearchBar >
        <Swiper style={{ padding: 8 }}
          className='test-h'
          indicatorColor='rgba(0, 0, 0, .3)'
          indicatorActiveColor='#ddd'
          circular
          indicatorDots
          autoplay
          interval='2000'
        >
          {
            this.state.images.map(data => {
              return (
                <SwiperItem key={data.id}>
                  <View>
                    <img src={data.url} style={{ width: '100%', height: 200 }} />
                  </View>
                </SwiperItem>
              )
            })
          }
        </Swiper>
        <AtGrid className='Grid' data={this.state.Nav} columnNum={4} hasBorder={false} >
        </AtGrid>
        {/* 租房小组开始 */}
        <View style={{ padding: '0.75rem', fontSize: '14px' }}>
          <b>租房小组</b><span style={{ float: 'right' }}>更多</span>
          <View className='Card'>
            <div>
              <span><b>家住回龙观</b><br></br>归属的感觉</span>
              <img src={this.state.recomment[0].image} alt='/' style={{ width: '50px', height: '50px' }}></img>
            </div>
            <div>
              <span><b>宜居四五环</b><br></br>大都市生活</span>
              <img src={this.state.recomment[1].image} alt='/' style={{ width: '50px', height: '50px' }}></img>
            </div>
            <div>
              <span><b>喧嚣三里屯</b><br></br>繁华的背后</span>
              <img src={this.state.recomment[2].image} alt='/' style={{ width: '50px', height: '50px' }}></img>
            </div>
            <div>
              <span><b>毗邻十号线</b><br></br>地铁心连心</span>
              <img src={this.state.recomment[3].image} alt='/' style={{ width: '50px', height: '50px' }}></img>
            </div>
          </View>
        </View>
        {/* 租房小结束 */}
        <View className='consult'>
          <div className='Info'>
            <span style={{ display: 'block', marginBottom: 5 }}><b>最新资讯</b></span>
            <img src={chuzu} alt="" />
            <div style={{ width: '40%' }}><b>置业佳选|大理皇宫苍山洱海间的箍牙别院</b></div>
            <div className='bot' style={{ width: '40%' }}>新华网<div>两天前</div></div>
          </div>
          <div className='Info'>
            <img src={chuzu} alt="" />
            <div style={{ width: '40%' }}><b>置业佳选|大理皇宫苍山洱海间的箍牙别院</b></div>
            <div className='bot' style={{ width: '40%' }}>新华网<div>两天前</div></div>
          </div>
          <div className='Info'>
            <img src={chuzu} alt="" />
            <div style={{ width: '40%' }}><b>置业佳选|大理皇宫苍山洱海间的箍牙别院</b></div>
            <div className='bot' style={{ width: '40%' }}>新华网<div>两天前</div></div>
          </div>
          <div className='Info'>
            <img src={chuzu} alt="" />
            <div style={{ width: '40%' }}><b>置业佳选|大理皇宫苍山洱海间的箍牙别院</b></div>
            <div className='bot' style={{ width: '40%' }}>新华网<div>两天前</div></div>
          </div>
          <div className='Info'>
            <img src={chuzu} alt="" />
            <div style={{ width: '40%' }}><b>置业佳选|大理皇宫苍山洱海间的箍牙别院</b></div>
            <div className='bot' style={{ width: '40%' }}>新华网<div>两天前</div></div>
          </div>
        </View>
      </View>
    )
  }
}
