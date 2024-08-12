import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { colors } from '../../theme/themeComponents'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { globalStyles } from '../../theme/theme'
import { ThemeContext } from '../../context/ThemeProvider'


interface Props {
  text: string,
  safe?: boolean,
  backgorundColor: string,
}

export default function Subtitle({ text, safe = false, backgorundColor = colors.background }: Props) {
  const { colors } = useContext(ThemeContext)

  const { top } = useSafeAreaInsets()
  return (

    <Text style={{
      ...globalStyles.primaryText,
      marginTop: safe ? top : 0,
      marginBottom: 10,
      backgroundColor: backgorundColor,
      color: colors.text
    }}>{text}</Text>

  )
}