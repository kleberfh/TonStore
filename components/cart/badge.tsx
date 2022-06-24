import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Text, StyleSheet, Animated } from 'react-native';
import { getCartCount } from '../../redux/cartSlice';
import {
  DANGER_COLOR,
  FONT_SIZE_XS,
  ROUNDED,
  SECONDARY_COLOR,
  SPACER_LG,
  SPACER_SM,
  SPACER_XS,
} from '../theme';

const styles = StyleSheet.create({
  container: {
    top: -SPACER_XS,
    width: SPACER_LG,
    height: SPACER_LG,
    right: -SPACER_SM,
    zIndex: 1,
    borderRadius: ROUNDED,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DANGER_COLOR,
  },
  count: {
    fontSize: FONT_SIZE_XS,
    color: SECONDARY_COLOR,
    fontWeight: 'bold',
  },
});

export default function Badge() {
  const count = useSelector(getCartCount);
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (count > 0) {
      Animated.timing(scale, {
        toValue: 1.5,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(scale, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  if (!count) return null;

  return (
    <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
      <Text style={styles.count}>{count}</Text>
    </Animated.View>
  );
}
