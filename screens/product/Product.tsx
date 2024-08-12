import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { globalColors, globalStyles } from '../../theme/theme';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParams } from '../../routes/StackNavigator';
import { useEffect, useRef } from 'react';
import { ScrollView } from 'react-native';

export const Product = () => {
  const params = useRoute<RouteProp<RootStackParams>>().params;
  const navigation = useNavigation();
  let refImage = useRef()
  let width: Number = useWindowDimensions()

  width = refImage.current


  useEffect(() => {
    navigation.setOptions({
      title: params.title,
    });
  }, []);

  return (
    <ScrollView  >
      <View style={globalStyles.container}>
        <View style={styles.cardCoffe}>
          <Image
            source={{ uri: params.image }}

            width={refImage.current}
            height={370}
          />
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 25 }}>
              {params.title}
            </Text>
            <Text style={styles.textDescription}>{params.description}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  cardCoffe: {
    backgroundColor: '#280404',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 90,
    textAlign: 'left'

  }
  ,
  textDescription: {
    fontSize: 14,
    color: ""
  },
  imagen: {

    display: 'flex',
    alignItems: 'center'
  }
})