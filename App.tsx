import 'react-native-gesture-handler';

import * as React from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './routes/TabBottomNavigator';

import { decode, encode } from 'base-64'
import { ThemeContext, ThemeProvider } from './context/ThemeProvider';







const AppNavigation = ({ children }: React.PropsWithChildren) => {
  const { isDark } = React.useContext(ThemeContext)



  return (
    <NavigationContainer
      theme={isDark ? DarkTheme : DefaultTheme}

    >

      {children}
    </NavigationContainer>)



}


const AppTheme = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AppNavigation>
        {children}
      </AppNavigation>
    </ThemeProvider>)

}




export const App = () => {


  if (!global.btoa) {

    global.btoa = encode;
  }

  if (!global.atob) {
    global.atob = decode;
  }


  return (
    <AppTheme>
      <TabNavigator />
    </AppTheme>


  )



};
