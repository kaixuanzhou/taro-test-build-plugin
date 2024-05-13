import React, { Component } from 'react'
import { View, Text, NativeSlot } from '@tarojs/components'
import './avatar.scss'

export default class Avatar extends Component {
  static options = {
    multipleSlots: true,
  }

  render () {
    return (
      <View >
        <Text>slot 1：</Text>
        <NativeSlot name='slot1' />
        <Text>slot 2：</Text>
        <NativeSlot name='slot2' />
      </View>
    )
  }
}
