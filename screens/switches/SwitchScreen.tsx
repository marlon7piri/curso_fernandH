import { View, Text, useWindowDimensions, Switch } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../ui/CustomView'
import { colors } from '../../theme/themeComponents'
import Button from '../ui/Button'
import CustomSwitch from '../ui/CustomSwitch'
import Separator from '../ui/Separator'

export default function SwitchScreen() {

  const [state, setState] = useState({
    isActive: false,
    isHangry: true,
    isHappy: true
  })





  return (
    <CustomView >

      <CustomSwitch
        isOn={state.isActive}
        text='¿Está activo?'
        onChange={(value) => {
          setState({ ...state, isActive: value })
          console.log(state)
        }}

      />
      <Separator />
      <CustomSwitch
        isOn={state.isHangry}
        text='¿Tiene hambre?'
        onChange={(value) => {
          setState({ ...state, isHangry: value })
          console.log(state)
        }}

      />
      <Separator />
      <CustomSwitch
        isOn={state.isHappy}
        text='Está feliz?'
        onChange={(value) => {
          setState({ ...state, isHappy: value })
          console.log(state)
        }}

      />
    </CustomView>
  )
}