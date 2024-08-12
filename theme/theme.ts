import {StyleSheet} from 'react-native';

export const globalColors = {
  primary: '#7037eb',
  chocolate: '#2c3e50',
  perla: '#f5f6fa',
  background: '#fff',
};

export const globalStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: globalColors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botonPrimary: {
    backgroundColor: globalColors.chocolate,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botonText: {
    color: globalColors.perla,
  },

  primaryText: {
    fontSize: 30,
    fontWeight: '900',
    color: 'black',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
