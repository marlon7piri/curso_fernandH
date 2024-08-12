import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'


interface Props {
  style?: StyleProp<ViewStyle>
}

export default function Separator({ style }: Props) {
  return <View style={[
    style, { backgroundColor: 'gray', height: .3, width: '90%', alignSelf: 'center' }
  ]} />


}