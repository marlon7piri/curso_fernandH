import { View, Text, Switch, StyleSheet, Platform } from 'react-native';
import React, { useContext } from 'react';
import { colors } from '../../theme/themeComponents';
import Separator from './Separator';
import { ThemeContext } from '../../context/ThemeProvider';

interface Props {
  isOn: boolean;
  text?: string;
  onChange: (value: boolean) => void;
}

export default function CustomSwitch({ isOn, onChange, text }: Props) {
  const { colors } = useContext(ThemeContext)

  return (

    <View style={[styles.SwitchRows, { backgroundColor: colors.cardBackground }]}>
      {text && <Text style={{ color: colors.text }}>{text}</Text>}
      <Switch
        thumbColor={Platform.OS === 'android ' ? 'blue' : ''}
        ios_backgroundColor="#3e3e3e"
        trackColor={isOn ? 'red' : 'green'}
        onValueChange={onChange}
        value={isOn}
      />



    </View>
  );
}

const styles = StyleSheet.create({
  SwitchRows: {

    backgroundColor: colors.background,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10
  },
});
