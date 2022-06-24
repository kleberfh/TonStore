import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Product from './product';
import { getAllProducts } from '../../redux/productsSlice';
import { PRODUCT_ROWS, SPACER_LG, SPACER_SM } from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list_container: {
    paddingTop: SPACER_SM,
    paddingBottom: SPACER_LG,
  },
  products_container: {
    paddingHorizontal: SPACER_SM,
  },
});

export default function ProductsList() {
  const products = useSelector(getAllProducts);

  return (
    <FlatList
      data={products}
      style={styles.container}
      numColumns={PRODUCT_ROWS}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.list_container}
      columnWrapperStyle={styles.products_container}
      renderItem={({ item }) => <Product product={item} />}
    />
  );
}
