import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../context/ThemeProvider';
const {currentTheme} = useContext(ThemeContext);

export interface ThemeColors {
  primary: string;
  text: string;
  background: string;
  cardBackground: string;
  buttonTextColor: string;
}

export const lightColors: ThemeColors = {
  primary: '#5856D6',
  text: 'black',

  background: '#F3F2F7',
  cardBackground: 'white',
  buttonTextColor: 'white',
};
export const darkColors: ThemeColors = {
  primary: '#F3F2F7',
  text: 'white',

  background: '#2f2829',
  cardBackground: 'black',
  buttonTextColor: 'white',
};

export const colors: ThemeColors = {
  primary: '#5856D6',
  text: currentTheme === 'light' ? lightColors.text : darkColors.text,

  background:
    currentTheme === 'light' ? lightColors.background : darkColors.background,
  cardBackground:
    currentTheme === 'light'
      ? lightColors.cardBackground
      : darkColors.cardBackground,
  buttonTextColor: 'white',
};

export const globalStylesComponents = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },

  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
  globalMargin: {
    paddingHorizontal: 20,
    flex: 1,
  },

  btnPrimary: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  btnPrimaryText: {
    color: colors.text,
    fontSize: 16,
  },
});
