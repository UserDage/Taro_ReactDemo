import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
export default class Index extends Component {
  componentWillMount() { }
  componentDidMount() { }
  componentWillUnmount() { }
  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <h2>你好你好啊！</h2>
      </View>
    )
  }
}
