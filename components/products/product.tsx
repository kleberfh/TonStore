import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, Pressable, StyleSheet } from 'react-native';
import { IProduct } from '../../types';
import { getProductsWidth } from '../utilities';
import {
  FONT_SIZE_LG,
  FONT_SIZE_MD,
  FONT_SIZE_SM,
  PRIMARY_COLOR,
  ROUNDED,
  SECONDARY_COLOR,
  SHADOW_COLOR,
  SPACER_MD,
  SPACER_SM,
  SPACER_XS,
  TEXT_COLOR,
  TEXT_OPACITY,
  WIDTH_FULL,
} from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: SPACER_SM,
    width: getProductsWidth(),
  },
  content: {
    borderRadius: ROUNDED / 2,
    shadowColor: SHADOW_COLOR,
    shadowOpacity: 0.1,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: SECONDARY_COLOR,
  },
  image: {
    width: 180,
    height: 100,
    marginTop: SPACER_SM,
  },
  title: {
    fontSize: FONT_SIZE_LG,
    width: WIDTH_FULL,
    color: TEXT_COLOR,
    marginTop: SPACER_SM,
    fontWeight: '600',
    textAlign: 'center',
  },
  price: {
    opacity: TEXT_OPACITY,
    marginTop: SPACER_XS,
    fontSize: FONT_SIZE_SM,
    width: WIDTH_FULL,
    color: TEXT_COLOR,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    width: '80%',
    alignItems: 'center',
    borderRadius: ROUNDED * 2,
    marginVertical: SPACER_SM,
    paddingVertical: SPACER_SM,
    paddingHorizontal: SPACER_MD,
    backgroundColor: PRIMARY_COLOR,
  },
  button_text: {
    fontSize: FONT_SIZE_MD,
    color: SECONDARY_COLOR,
    fontWeight: '700',
  },
});

export default function Product(props: { product: IProduct }) {
  const { product } = props;
  const navigation = useNavigation();

  const handleProductDetails = () => {
    navigation.navigate('Details', { product });
  };

  return (
    <Pressable style={styles.container} onPress={handleProductDetails}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{ uri: product.image }}
        />
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.button}>
          <Text style={styles.button_text}>Detalhes</Text>
        </View>
      </View>
    </Pressable>
  );
}
