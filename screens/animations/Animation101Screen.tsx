import { Animated, View, Text, StyleSheet, Pressable, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { globalStyles } from '../../theme/theme'
import { colors } from '../../theme/themeComponents'
import { useAnimation } from '../../hooks/useAnimation'
import CustomView from '../ui/CustomView'
import { PrimaryButton } from '../../components/shared/PrimaryButton'

export default function Animation101Screen() {

  const { animatedOpacity, animationTranslate, fadeIn,
    fadeOut, moveYPosition } = useAnimation()




  return (
    <CustomView style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <Animated.View style={[styles.purpleBox, {
        opacity: animatedOpacity,
        transform: [{ translateY: animationTranslate }]
      }]}>
        <Text>Hola mundo</Text>
      </Animated.View>

      <PrimaryButton label='  Fade IN' onPress={() => {
        fadeIn({})
        moveYPosition({
          duration: 1000, callback: () => {
            animationTranslate.resetAnimation()
          }
        })
      }

      } />
      <PrimaryButton label='   Fade OUT' onPress={fadeOut}

      />
    </CustomView >
  )
}

const styles = StyleSheet.create({


  purpleBox: {
    width: 150,
    height: 150,
    backgroundColor: colors.primary
  },
  button: {
    backgroundColor: colors.primary,
    marginTop: 10,
    padding: 10,
    borderRadius: 10
  }
})