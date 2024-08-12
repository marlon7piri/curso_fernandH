import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import Separator from './Separator';
import { ThemeContext } from '../../context/ThemeProvider';
import { darkColors, lightColors } from '../../theme/themeComponents';

interface Props {
  value: string;
  handlerInput: () => void,
  placeholder: string
}

export default function CustomInput({ value, handlerInput, placeholder }: Props) {

  const { colors, currentTheme } = useContext(ThemeContext)
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    telefono: ''
  })


  return (

    <>
      <TextInput style={[styles.input, {
        backgroundColor: currentTheme === 'dark' ? 'transparent' : lightColors.cardBackground,
        borderWidth: 1,
        borderColor: currentTheme === 'dark' ? darkColors.text : lightColors.text,
        color: currentTheme === 'dark' ? darkColors.text : lightColors.text
      }]}
        placeholder={placeholder}
        onChangeText={value => setForm({ ...form, name: value })}
        onChange={handlerInput}
        value={form.name}
        autoCorrect={false}
        placeholderTextColor={colors.text}
        autoCapitalize='words'
      />
      <View style={{ marginTop: 10 }} />

      <TextInput style={[styles.input, {
        backgroundColor: currentTheme === 'dark' ? 'transparent' : lightColors.cardBackground,
        borderWidth: 1,
        borderColor: currentTheme === 'dark' ? darkColors.text : lightColors.text,
        color: currentTheme === 'dark' ? darkColors.text : lightColors.text
      }]}
        placeholder={placeholder}
        onChangeText={value => setForm({ ...form, email: value })}
        keyboardType='email-address'
        onChange={handlerInput}
        value={form.email}
        autoCorrect={false}
        placeholderTextColor={colors.text}
        autoCapitalize='words'
      />

      <View style={{ marginTop: 10 }} />
      <TextInput style={[styles.input, {
        backgroundColor: currentTheme === 'dark' ? 'transparent' : lightColors.cardBackground,
        borderWidth: 1,
        borderColor: currentTheme === 'dark' ? darkColors.text : lightColors.text,
        color: currentTheme === 'dark' ? darkColors.text : lightColors.text
      }]}
        placeholder={placeholder}
        onChangeText={value => setForm({ ...form, password: value })}
        onChange={handlerInput}
        value={form.password}
        autoCorrect={false}
        placeholderTextColor={colors.text}
        autoCapitalize='words'
      />
      <View style={{ marginTop: 10 }} />
      <TextInput style={[styles.input, {
        backgroundColor: currentTheme === 'dark' ? 'transparent' : lightColors.cardBackground,
        borderWidth: 1,
        borderColor: currentTheme === 'dark' ? darkColors.text : lightColors.text,
        color: currentTheme === 'dark' ? darkColors.text : lightColors.text
      }]}
        placeholder={placeholder}
        onChangeText={value => setForm({ ...form, telefono: value })}
        onChange={handlerInput}
        keyboardType='phone-pad'
        value={form.telefono}
        autoCorrect={false}
        placeholderTextColor={colors.text}
        autoCapitalize='words'
      />

      <View style={{ marginTop: 10 }} />

      <Text style={{ color: colors.text }}>
        {JSON.stringify(form, null, 2)}
      </Text>
      <Text style={{ color: colors.text }}>
        {JSON.stringify(form, null, 2)}
      </Text>
      <Text style={{ color: colors.text }}>
        {JSON.stringify(form, null, 2)}
      </Text>
      <Text style={{ color: colors.text }}>
        {JSON.stringify(form, null, 2)}
      </Text>

    </>

  )
}

const styles = StyleSheet.create(
  {
    input: {
      borderWidth: 1,
      borderColor: 'black',
      color: 'black',
      borderRadius: 10,
      paddingHorizontal: 10
    }
  }
)