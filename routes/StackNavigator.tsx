import { FavoriteScreen } from '../screens/favorite/FavoriteScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { ProductsNavigator } from './ProductsNavigator';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import { TabNavigator } from './TabBottomNavigator';


export type RootStackParams = {
  HomeStack: undefined;
  Products: { id: number; name: string; imageUrl: string, title: string, description: string };
  Favorite: undefined;
  Profile: undefined,
  Register: undefined
  Login: undefined,


};

const StackNative = createStackNavigator<RootStackParams>();
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {


  const { colors } = useContext(ThemeContext)
  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        /*   cardStyle: {
            backgroundColor: colors.background
          }
   */

      }}


    >
      <Stack.Screen name="HomeStack" component={TabNavigator} />
      <Stack.Screen name="Favorite" component={FavoriteScreen} />

      <Stack.Screen name="Products" component={ProductsNavigator} />
      <Stack.Screen name="Profile" component={ProfileScreen} />


    </Stack.Navigator>
  );
};
