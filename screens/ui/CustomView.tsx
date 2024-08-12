import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { PropsWithChildren, useContext } from 'react'
import { colors, globalStylesComponents } from '../../theme/themeComponents'
import { ThemeContext } from '../../context/ThemeProvider'

interface Props extends PropsWithChildren {

  style?: StyleProp<ViewStyle>
  children: React.ReactNode
}


export default function CustomView({ style, children }: Props) {
  const { colors } = useContext(ThemeContext)


  return (
    <View style={[{
      backgroundColor: colors.background,
      flex: 1,
      padding: 20,

    }
      , style]}>
      {children}
    </View>
  )
}