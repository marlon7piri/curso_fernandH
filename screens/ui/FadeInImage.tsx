import { View, Text, ImageStyle, ActivityIndicator, Animated } from 'react-native'
import React, { useState } from 'react'
import { StyleProp } from 'react-native'
import { useAnimation } from '../../hooks/useAnimation'


interface Props {
  uri: string,
  style?: StyleProp<ImageStyle>
}

export default function FadeInImage({ uri, style }: Props) {

  const { animatedOpacity, fadeIn } = useAnimation()
  const [isloading, setIsloading] = useState(true)
  return (

    <View>
      {isloading && <ActivityIndicator size={'large'} color={'white'} />}
      <Animated.Image
        source={{ uri }}
        onLoadEnd={() => {
          fadeIn({ duration: 1000 })
          setIsloading(false)
        }}
        style={[style, {
          opacity: animatedOpacity
        }]}
      />
    </View>
  )
}