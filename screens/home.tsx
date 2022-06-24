import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/loading';
import { fetchProducts, getProductsStatus } from '../redux/productsSlice';
import ProductsList from '../components/products/productsList';
import { AppDispatch } from '../types';
import {
  BACKGROUND_COLOR,
  FONT_SIZE_3XL,
  PRIMARY_COLOR,
} from '../components/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const status = useSelector(getProductsStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {status === 'loading' ? (
          <View style={styles.loading}>
            <Loading size={FONT_SIZE_3XL} color={PRIMARY_COLOR} thickness={6} />
          </View>
        ) : (
          <ProductsList />
        )}
      </View>
    </View>
  );
}
