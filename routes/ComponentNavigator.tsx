import { HomeScreen } from '../screens/home/HomeScreen';
import { FavoriteScreen } from '../screens/favorite/FavoriteScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Product } from '../screens/product/Product';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { DrawerNavigator } from './DrawerNavigator';
import { globalColors } from '../theme/theme';
import Animation101Screen from '../screens/animations/Animation101Screen';
import Animation102Screen from '../screens/animations/Animation102Screen';
import ComponentsClases from '../screens/componentClase/ComponentsClases';
import SwitchScreen from '../screens/switches/SwitchScreen';
import AlertScreen from '../screens/alerts/AlertScreen';
import TextInputScreen from '../screens/inputs/TextInputScreen';
import PullToRefreshScreen from '../screens/ui/PullToRefreshScreen';
import CustomSectionListScreen from '../screens/ui/CustomSectionListScreen';
import ModalScreen from '../screens/ui/ModalScreen';
import InfiniteScrollScreen from '../screens/ui/InfiniteScrollScreen';
import SlidesScreen from '../screens/ui/SlidesScreen';
import ChangeThemeScreen from '../screens/themeChange/ChangeThemeScreen';

export type RootStackParams = {

  Animation101Screen: undefined,
  Animation102Screen: undefined,
  ComponentsClases: undefined,
  SwitchScreen: undefined,
  AlertScreen: undefined,
  TextInputScreen: undefined,
  PullToRefreshScreen: undefined,
  CustomSectionListScreen: undefined,
  ModalScreen: undefined,
  InfiniteScrollScreen: undefined,
  SlidesScreen: undefined,
  ChangeThemeScreen: undefined,
};

const Stack = createStackNavigator<RootStackParams>();

export const ComponentNavigator = () => {
  return (

    <Stack.Navigator initialRouteName='ComponentsClases' screenOptions={{
      headerShown: true
    }}
    >


      <Stack.Screen name="ComponentsClases" component={ComponentsClases} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
      <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
      <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
      <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
    </Stack.Navigator>
  );
};
