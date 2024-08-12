import { View, Text, FlatList, ActivityIndicator, Image, useWindowDimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import CustomView from './CustomView'
import TheTitle from '../../components/shared/TheTitle'
import FadeInImage from './FadeInImage'

export default function InfiniteScrollScreen() {


  const [Number, setNumber] = useState([0, 1, 2, 3, 4, 5])
  const [isloading, setIsloading] = useState(false)




  const loadmore = () => {

    const newArray = Array.from({ length: 5 }, (_, i) => Number.length + i
    )
    setIsloading(true)
    setTimeout(() => {


      setNumber([...Number, ...newArray])
      setIsloading(false)

    }, 1000)
  }
  return (


    <View style={{ flex: 1, backgroundColor: 'black', padding: 10 }}>


      <FlatList
        data={Number}
        onEndReached={loadmore}
        onEndReachedThreshold={0.6}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item, index }) => <ListItem number={item} />}
      /*  ListFooterComponent={() => (
         <View style={{
           backgroundColor: 'red',
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           position: 'absolute',
           bottom: 100,
           left: 150,
           zIndex: 100

         }}>
           <ActivityIndicator size={'large'} color={'white'} />
         </View>
       )} */
      />

      {isloading && <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        left: 150,
        zIndex: 100

      }}>
        <ActivityIndicator size={'large'} color={'white'} />
      </View>}
    </View>

  )
}

interface Props {
  number: number
}
const ListItem = ({ number }: Props) => {




  return <FadeInImage uri={`https://picsum.photos/id/${number}/200/300`}
    style={{
      width: "100%",
      height: 400,
      objectFit: 'cover',
      marginBottom: 15,
      borderRadius: 20,
      shadowOffset: {
        height: 10,
        width: 15
      },
      shadowOpacity: 0.6,
      shadowColor: 'white',
      shadowRadius: 90,
    }} />
}