import React, { useEffect } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';
import { IIconProps } from '../types';
import { ROUNDED, WIDTH_FULL } from './theme';

const styles = StyleSheet.create({
  container: {
    borderColor: '#dddddd',
    borderRadius: ROUNDED * 2,
  },
  loading: {
    height: 0,
    borderWidth: 4,
    borderRadius: 90,
    width: WIDTH_FULL,
  },
});

export default function Loading(props: IIconProps) {
  const { size, color, thickness } = props;

  const rotationValue = new Animated.Value(0);

  const spin = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotationValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderTopColor: color,
          borderWidth: thickness || 4,
          transform: [
            {
              rotate: spin,
            },
          ],
        },
      ]}
    />
  );
}
