import { View, Text, TextStyle } from 'react-native'
import React, { useContext } from 'react'
import { StyleProp } from 'react-native'
import { globalStylesComponents } from '../../theme/themeComponents'
import { ThemeContext } from '../../context/ThemeProvider'

interface Props {
  title: string,
  styles: StyleProp<TextStyle>
}

export default function TheTitle({ title, styles }: Props) {
  const { colors } = useContext(ThemeContext)
  return (

    <Text style={[globalStylesComponents.title,
      styles, {
      color: colors.text
    }
    ]}>{title}</Text>

  )
}