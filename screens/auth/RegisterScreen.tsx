import { Text, TouchableOpacity, View, TextInput, StyleSheet } from 'react-native';
import { globalColors, globalStyles } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { userService } from '../../services/userServices';
import { ApiUser } from '../../infra/user/ApiUser';
import { auth, db } from '../../infra/firebase.config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { collection } from 'firebase/firestore/lite';
import { addDoc } from 'firebase/firestore';


export const RegisterScreen = () => {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [userName, setUserName] = useState<string>("")

  const navigation = useNavigation()

  const createUser = async (

  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
      const user = userCredential.user;



      if (user) {
        navigation.navigate("Login")

      } else {
        throw new Error('Error creating the user');
      }
    } catch (error) {
      throw new Error('Error creating the user');
    }
  }



  return (
    <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>



      <View style={styles.containerTop}>
        <Text style={styles.textLogin}>
          Register
        </Text>
      </View>

      <View style={styles.containerButtom}>
        <View style={styles.containerImput}>
          <TextInput value={userName} onChangeText={setUserName} placeholder='Usuario' style={styles.imput} placeholderTextColor={globalColors.chocolate} />
          <TextInput value={email} onChangeText={setEmail} placeholder='Email' style={styles.imput} placeholderTextColor={globalColors.chocolate} />
          <TextInput value={password} onChangeText={setPassword} placeholder='Contraseña' style={styles.imput} secureTextEntry={true} placeholderTextColor={globalColors.chocolate} />
          <TouchableOpacity onPress={createUser} style={styles.botonLogin} activeOpacity={0.7}>
            <Text>
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ color: globalColors.chocolate }}>
            I  have an acount,  <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ padding: 0, justifyContent: 'center', alignItems: 'center', }}>
              <Text style={{ color: "blue", fontWeight: 900, textAlign: 'center' }}>Login</Text>
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

