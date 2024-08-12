import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const animationTranslate = useRef(new Animated.Value(0)).current;

  function fadeIn({
    initialValue = 0,
    duration = 300,
    toValue = 1,
    callback = () => {},
  }) {
    animatedOpacity.setValue(initialValue);
    Animated.timing(animatedOpacity, {
      toValue: toValue,

      duration: duration,
      useNativeDriver: true,
    }).start(callback);
  }

  function fadeOut({
    initialValue = 1,
    duration = 300,
    toValue = 0,
    callback = () => {},
  }) {
    animatedOpacity.setValue(initialValue);
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
  }

  function moveYPosition({
    initialPosition = -200,
    duration = 300,
    easing = Easing.elastic(2),
    toValue = 0,
    callback = () => {},
  }) {
    animationTranslate.setValue(initialPosition);
    Animated.timing(animationTranslate, {
      toValue: toValue,
      duration: duration,
      easing: easing, //Easing.quad //Easing.circle //Easing.cubic//  //Easing.elastic(1)
      useNativeDriver: true,
    }).start(callback);
  }

  return {
    animatedOpacity,
    animationTranslate,
    fadeIn,
    fadeOut,
    moveYPosition,
  };
};
