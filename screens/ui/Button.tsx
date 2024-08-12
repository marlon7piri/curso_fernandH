import { View, Text, Pressable, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from '../../theme/themeComponents';
import { globalStyles } from '../../theme/theme';


interface Props {
  text: string;
  styles?: StyleProp<ViewStyle>
  onPress: () => void
}
export default function Button({ onPress, text, styles }: Props) {
  return (
    <Pressable style={({ pressed }) => ([{
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      opacity: pressed ? 0.8 : 1
    }, styles])}


      onPress={onPress}>

      <Text style={globalStyles.botonText}>{text}</Text>
    </Pressable>
  )
}