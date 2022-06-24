import React from 'react';
import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Badge from './badge';
import { FONT_SIZE_2XL, SECONDARY_COLOR } from '../theme';

export default function CartButton() {
  const navigation = useNavigation();

  const handleOpenCart = () => {
    navigation.navigate('Cart');
  };

  return (
    <Pressable onPress={handleOpenCart}>
      <Badge />
      <Feather
        name="shopping-cart"
        size={FONT_SIZE_2XL}
        color={SECONDARY_COLOR}
      />
    </Pressable>
  );
}
