import { Alert, Text } from 'react-native'

import { ShowPrompt } from './prompt.adapter';
import CustomView from '../ui/CustomView';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';


export default function AlertScreen() {
  const { isDark } = useContext(ThemeContext)



  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
        isPreferred: true
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') }

    ],
      {
        userInterfaceStyle: isDark ? 'dark' : 'light'
      }

    );

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ], {
      cancelable: true, //para controlar cuando el usuario de click fuera de la ventana de alerta
      onDismiss() { //la funcion que se ejecutara
        console.log('onDismiss')
      },

    }
    );


  //Este promp  no funciona en android

  /*  const showPromp = () => {
     Alert.prompt(
       "Cual es su correo?",
       "Por favor escriba su correo",
       (valor: string) => console.log(valor),
       "secure-text",
       "Soy el valor por defecto",
       "number-pad"
 
 
     )
   } */

  const showtext = (value: unknown) => {
    console.log("Desde mi funcion personalizada " + value)
  }

  const showPromptWithLibrary = () => {

    ShowPrompt({
      title: 'Please type your password',
      subtitle: 'the password it have 4 words',
      buttons: [
        { text: "Cancel", onPress: (value) => console.log("Bye!"), style: 'default' },
        { text: "OK", onPress: (value) => showtext(value), style: 'default' },

      ],
      placeholder: 'Write your password', prompType: 'plain-text',

    })
  }
  return (
    <CustomView >
      <Text>Alerts</Text>


      <PrimaryButton label='Alerta - 2 Botones' onPress={createTwoButtonAlert} />
      <PrimaryButton label='Alerta - 3 Botones' onPress={createThreeButtonAlert} />
      <PrimaryButton label='Promp - Input' onPress={showPromptWithLibrary} />

    </CustomView>
  )
}