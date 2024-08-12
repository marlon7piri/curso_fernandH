import { Text, TouchableOpacity, View, TextInput, StyleSheet, Alert, Pressable } from 'react-native';
import { globalColors, globalStyles } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { User } from '../../interfaces/User';
import { userService } from '../../services/userServices';
import { auth, db } from '../../infra/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth/cordova';


interface FormProps {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  login: () => void

}



export const LoginScreen = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [userName, setUserName] = useState<string>("")

  const navigation = useNavigation()

  const login = async () => {

    const exist = await signInWithEmailAndPassword(auth, email, password)
    if (exist) {
      navigation.navigate("Home")
    }
  }




  return (
    <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>



      <View style={styles.containerTop}>
        <Text style={styles.textLogin}>
          Login
        </Text>
      </View>

      <View style={styles.containerButtom}>
        <View style={styles.containerImput}>
          <TextInput value={email} onChangeText={setEmail} placeholder='Usuario' style={styles.imput} placeholderTextColor={globalColors.chocolate} />
          <TextInput value={password} onChangeText={setPassword} placeholder='Contraseña' style={styles.imput} secureTextEntry={true} placeholderTextColor={globalColors.chocolate} />
          <TouchableOpacity style={styles.botonLogin} /* activeOpacity={0.7} */ onPress={login}>
            <Text>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ color: globalColors.chocolate }}>
            I dont have any acount,  
            <TouchableOpacity onPress={() => navigation.navigate("Register")} style={{ padding: 0, display: 'none', justifyContent: 'center', alignItems: 'center', }}>
              <Text style={{ color: "blue", fontWeight: 900, textAlign: 'center' }}>Register</Text>
            </TouchableOpacity>

          </Text>


        </View>
      </View>



    </View>



  );
};



const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    width: '100%',
    backgroundColor: '#353b48'
    ,

    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

  },
  textLogin: {
    fontSize: 30,
    color: globalColors.perla
  },
  containerButtom: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,

  },

  containerImput: {
    width: '100%',
    display: 'flex',
    gap: 10,
    padding: 10
  },
  imput: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 2,
    borderBottomColor: globalColors.chocolate,
    padding: 20,
    color: globalColors.chocolate
  },
  botonLogin: {
    backgroundColor: globalColors.chocolate,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center'
  }

})

