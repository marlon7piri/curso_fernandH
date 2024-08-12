
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Product } from '../screens/product/Product';

import { globalColors } from '../theme/theme';

export type RootStackParams = {
  Home: undefined;
  Products: { id: number; name: string; imageUrl: string, title: string, description: string };
  Favorite: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const ProductsNavigator = () => {
  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        title: "Cofees",
        headerTitleAlign: 'center',
        headerTintColor: globalColors.chocolate
      }}>


      <Stack.Screen name="ProductsNavigator" component={ProductsScreen} options={{
        headerShown: false
      }} />
      <Stack.Screen name="ProductNavigator" component={Product} />
    </Stack.Navigator>
  );
};
