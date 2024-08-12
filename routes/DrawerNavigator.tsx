import React from 'react';


import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/home/HomeScreen';
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {



  const navigation = useNavigation()
  return (
    <Drawer.Navigator screenOptions={{
      drawerActiveBackgroundColor: 'skyblue',
      drawerLabelStyle: {
        color: "white"
      },
      headerRight: () => {
        return (<TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer)}>
          <Text style={{ color: "red", marginRight: 10 }}>Open</Text>
        </TouchableOpacity>)
      },
      drawerStatusBarAnimation: 'slide'


    }}>
      <Drawer.Screen name="HomeDrawer" component={HomeScreen} />

    </Drawer.Navigator>
  );
};
