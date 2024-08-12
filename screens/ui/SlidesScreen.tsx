import { View, Text, ImageSourcePropType, FlatList, Image, useWindowDimensions, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import React, { useRef, useState } from 'react'
import { globalColors, globalStyles } from '../../theme/theme';
import { colors } from '../../theme/themeComponents';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/slide-3.png'),
  },
];

export default function SlidesScreen() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentSlidesRef = useRef<FlatList>(null)
  const navigation = useNavigation()


  const loadCurrentIndex = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

    const { contentOffset, layoutMeasurement } = event.nativeEvent

    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width)
    setCurrentIndex(currentIndex > 0 ? currentIndex : 0)
  }


  const scrollToMove = (index: number) => {

    if (!currentSlidesRef.current) return;
    currentSlidesRef.current.scrollToIndex({
      index: index,
      animated: true
    })

  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>


      <FlatList
        ref={currentSlidesRef}
        data={items}
        horizontal
        pagingEnabled //habilita un slides mas completo como si fuera un pase de pagina
        decelerationRate={'fast'} //hace que la animacion de slides sea mas rapida
        scrollEnabled={false} //desabilita el hacer scroll
        onScroll={loadCurrentIndex}

        keyExtractor={(item) => item.title.toString()}
        renderItem={({ item, index }) => (

          <ListSlides items={item} />



        )}



      />
      {currentIndex === items.length - 1
        ? (

          <PrimaryButton
            label='Finalizar'
            onPress={() => navigation.goBack()}

            style={{ width: 100, position: 'absolute', right: 20, bottom: 20, backgroundColor: colors.primary }} />)

        :

        (<PrimaryButton
          label='Siguiente'
          onPress={() => scrollToMove(currentIndex + 1)}

          style={{ width: 100, position: 'absolute', right: 20, bottom: 20, backgroundColor: colors.primary }} />)}

    </View>
  )
}


interface ListSlidesprops {
  items: Slide
}


const ListSlides = ({ items }: ListSlidesprops) => {
  const { title, img, desc } = items

  const { width, height } = useWindowDimensions()

  return (

    <View

      style={{
        flex: 1,
        width: width,
        height: height,
        padding: 20,
        marginTop: 100

      }}>
      <Image source={img}
        style={{
          width: 300,
          height: 200,
          alignSelf: 'center',
          resizeMode: "center"


        }}


      />
      <Text style={[globalStyles.primaryText, {
        color: colors.primary
      }]}>{title}</Text>
      <Text style={{
        color: colors.primary
      }}>{desc}</Text>

    </View >
  )


}