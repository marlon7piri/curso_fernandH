

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/profile/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FavoriteScreen } from '../screens/favorite/FavoriteScreen';
import { DrawerNavigator } from './DrawerNavigator';
import { ProductsNavigator } from './ProductsNavigator';
import { ComponentNavigator } from './ComponentNavigator';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

export type RootStackParams = {
  Home: undefined;
  Products: { id: number; name: string; imageUrl: string };
  ProductNavigator: { id: number; name: string; imageUrl: string };
  Favorite: undefined;
  Product: undefined;
  Profile: undefined;
  Componentes: undefined;
  Animation101Screen: undefined,
  Animation102Screen: undefined,


};
const Stack = createBottomTabNavigator<RootStackParams>();

export const TabNavigator = () => {

  const { colors } = useContext(ThemeContext)
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName = '';
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;

            case 'Profile':
              iconName = focused ? 'person' : 'person-circle-outline';
              break;
            case 'Products':
              iconName = focused ? 'cog' : 'cog-outline';
              break;
            case 'Favorite':
              iconName = focused ? 'heart' : 'heart-outline';
              break;
            case 'Componentes':
              iconName = focused ? 'cog' : 'cog-outline';
              break;
          }
          return <Ionicons name={iconName} size={23} color={colors.text} />;
        },
        tabBarLabelPosition: 'below-icon',
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.text,
        tabBarStyle: {
          backgroundColor: colors.cardBackground,
          paddingBottom: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 10,
          height: 70

        },



      }
      )}>
      <Stack.Screen name="Home" component={DrawerNavigator} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Favorite" component={FavoriteScreen} options={{
        headerTitleAlign: 'center',
      }} />

      <Stack.Screen name="Products" component={ProductsNavigator} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Componentes" component={ComponentNavigator} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  );
};
