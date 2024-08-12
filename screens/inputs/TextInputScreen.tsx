import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { globalStyles } from '../../theme/theme'
import CustomView from '../ui/CustomView'
import { colors } from '../../theme/themeComponents'
import CustomInput from '../ui/CustomInput'
import TheTitle from '../../components/shared/TheTitle'

export default function TextInputScreen() {
  return (
    <ScrollView>


      <CustomView >
        <TheTitle title='Inputs' styles={{ marginBottom: 20 }} />


        <CustomInput value='hola'
          handlerInput={() => { }}
          placeholder='Nombre Completo' />
      </CustomView>
    </ScrollView>
  )
}