import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { StackActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useCounterStore } from '../../store/counter-store';

export const FavoriteScreen = () => {


  const navigation = useNavigation()

  const incrementar = useCounterStore(state => state.incrementar)
  const count = useCounterStore(state => state.count)



  useEffect(() => {
    navigation.setOptions({
      headerTitle: `Contador: ${count}`
    })
  }, [count])

  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 20, color: 'black', fontSize: 20, }}>Contador: {count}</Text>
      <Pressable style={globalStyles.botonPrimary} onPress={() => incrementar(1)}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          +1
        </Text>
      </Pressable>
      <Pressable style={globalStyles.botonPrimary} onPress={() => incrementar(-1)}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          -1
        </Text>
      </Pressable>
      <Text style={{ marginBottom: 20 }}>Favoritos</Text>


      <PrimaryButton label='Regresar' onPress={() => navigation.goBack()} />
      <PrimaryButton label='Ir a Home' onPress={() => navigation.dispatch(StackActions.popToTop())} />


    </View>
  );
};



