import React, { useState } from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { globalColors, globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../../routes/StackNavigator';
import axios from 'axios'
import { useCoffe } from '../../hooks/useCoffe';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useProducts } from '../../hooks/useProducts';



export const ProductsScreen = () => {
  /*  const widthscreen = useWindowDimensions() */
  /* const { coffes } = useCoffe() */
  const { products, isloading } = useProducts()

  console.log(products)
  /*  const navigation = useNavigation<NavigationProp<RootStackParams>>(); */



  const ItemSeparator = () => (
    <View style={styles.separator} />
  );

  if (isloading) {
    return (

      <Modal

        animationType='slide'
        visible={isloading}
        transparent={false}

      >

        <View

          style={{ flex: 1, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}

        >
          <ActivityIndicator size={'large'} color={'gray'} />

        </View>

      </Modal>
    )
  }


  return (
    <View style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
      <View style={{
        flex: 1, backgroundColor: globalColors.chocolate,
        width: '100%', borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        justifyContent: 'center'
      }}>
        <Text style={[globalStyles.primaryText, { textAlign: 'center', color: 'white' }]}>
          Productos
        </Text>
      </View>
      <View style={{ flex: 2, padding: 10 }}>
        <FlatList
          data={
            products
          }
          showsVerticalScrollIndicator={false}
          horizontal={true} ItemSeparatorComponent={ItemSeparator}
          renderItem={({
            item
          }) => (
            <View style={styles.container}>

              {/* <View >
                <Image source={{ uri: item.image }} style={styles.imagen} />
              </View> */}
              <TouchableOpacity style={styles.button}
              /* onPress={() =>
                navigation.navigate('Product', {
                  id: item.id,
                  title: item.title,
                  image: item.image,
                  description: item.description
                })
              } */


              ><Text style={styles.textButton}>{item.name}</Text></TouchableOpacity>
              <Text style={styles.textButton}>{item.price}</Text>
              <Text style={styles.textButton}>{item.stock}</Text>
            </View>
          )} />
      </View>



    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 290,
    backgroundColor: globalColors.chocolate,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden'

  },

  separator: {
    height: 1,
    width: 25,
  },

  imagen: {
    width: '100%',
    height: 235,
    objectFit: 'cover',



  },
  button: {
    backgroundColor: globalColors.perla,

    display: 'flex',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    color: globalColors.chocolate,
    fontWeight: '900'

  }
});
