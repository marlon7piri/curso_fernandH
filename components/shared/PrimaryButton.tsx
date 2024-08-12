import React from 'react';
import { Pressable, StyleProp, Text, View, ViewStyle } from 'react-native';
import { globalStyles } from '../../theme/theme';

interface PropsBoton {
  label: string
  onPress: () => void,
  style?: StyleProp<ViewStyle>
}

export const PrimaryButton = ({ label, onPress, style }: PropsBoton) => {
  return (
    <View>
      <Pressable style={[globalStyles.botonPrimary, style]} onPress={onPress}>
        <Text style={globalStyles.botonText}>{label}</Text>
      </Pressable>
    </View>
  );
};
