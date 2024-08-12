import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { LoginScreen } from "./LoginScreen";
import { RegisterScreen } from "./RegisterScreen";


export const AuthScreen = () => {


  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{
      headerShown: false,

    }}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />

    </Stack.Navigator>
  );
};
