import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Slot } from '@tarojs/components'

export default class Index extends Component {
  render () {
    return (
      <View className='index'>
        {/** 测试插件组件 */}
        <avatar>
          <Slot name='slot1'>测试slot1</Slot>
          <Slot name='slot2'>测试slot2</Slot>
          </avatar>


      </View>
    )
  }
}
