import { Pressable, StatusBar, Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { RootStackParams } from '../../routes/StackNavigator';
import { SafeAreaView } from 'react-native';
import { useProfileStore } from '../../store/profile-store';
import { useCounterStore } from '../../store/counter-store';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const email = useProfileStore(state => state.email)
  const name = useProfileStore(state => state.name)
  const restarValues = useProfileStore(state => state.restarProfile)
  const count = useCounterStore(state => state.count)





  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={{ display: 'flex', gap: 10 }}>
        <Text style={{ marginBottom: 20, color: 'black', fontSize: 20, }}>Contador: {count}</Text>

        <Text style={{ color: "#000", fontSize: 20, fontWeight: 'bold' }}>Nombre: {name}</Text>
        <Text style={{ color: "#000", fontSize: 20, fontWeight: 'bold' }}>Email: {email}</Text>
        <Pressable onPress={() => useProfileStore.setState({ name: "Marlon Rodriguez" })} style={globalStyles.botonPrimary} >
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Cambiar Nombre
          </Text>
        </Pressable>
        <Pressable onPress={() => useProfileStore.setState({ email: "marlon7piri@gmail.com" })} style={globalStyles.botonPrimary} >
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Cambiar Email
          </Text>
        </Pressable>
        <Pressable onPress={() => restarValues('jhon@gmail.com', 'Jhon Doe')} style={globalStyles.botonPrimary}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Restar Values
          </Text>
        </Pressable>
      </View>
    </SafeAreaView >
  );
};
