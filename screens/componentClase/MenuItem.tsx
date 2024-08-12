import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useContext } from 'react'
import Ioicon from 'react-native-vector-icons/Ionicons'
import { globalStylesComponents } from '../../theme/themeComponents';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../routes/StackNavigator';
import Separator from '../ui/Separator';
import { ThemeContext } from '../../context/ThemeProvider';


interface Props {
  name: string;
  icon: string;
  component: string;
  isFirst: boolean;
  isLast: boolean
}

export default function MenuItem({ icon, name, component, isFirst = false, isLast = false }: Props) {

  const { colors } = useContext(ThemeContext)

  const navigation = useNavigation()
  return (
    <View>

      <View style={{
        ...styles.container, backgroundColor: colors.cardBackground,
        ...(isFirst && { borderTopLeftRadius: 10, borderTopRightRadius: 10 }),
        ...(isLast && { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }),



      }}

      >
        <Pressable
          style={{ width: '50%', display: 'flex', gap: 5, flexDirection: 'row', alignItems: 'center', }}
          onPress={() => navigation.navigate(component)}

        >
          <Ioicon name={icon} size={20} color={colors.text} />
          <Text style={{ color: colors.text }}>{name}</Text>
        </Pressable>
        <Ioicon name={'chevron-forward-outline'} size={20} color={colors.text} />

      </View>

      {!isLast && <Separator />}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 5,


  }
})