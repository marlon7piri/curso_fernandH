import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import CustomView from '../ui/CustomView'
import TheTitle from '../../components/shared/TheTitle'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { colors } from '../../theme/themeComponents'
import { ThemeContext } from '../../context/ThemeProvider'

export default function ChangeThemeScreen() {

  const { setTheme, currentTheme, colors } = useContext(ThemeContext)
  return (
    <CustomView style={{ backgroundColor: colors.background }}>
      <TheTitle title={`Chanage Theme  ${currentTheme}`} styles={{ color: colors.text }} />

      <PrimaryButton label='Light Mode'
        onPress={() => setTheme('light')}

        style={{ marginTop: 20 }} />

      <PrimaryButton
        label='Dark Mode'
        onPress={() => setTheme('dark')} />


      <View>
        <Text style={{ color: colors.text }}>  {JSON.stringify(colors, null, 2)}</Text>
      </View>
    </CustomView>
  )
}