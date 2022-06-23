import Product from "./product";
import {useSelector} from "react-redux";
import {StyleSheet, FlatList} from "react-native";
import {getNumberOfProductsRows} from "../utilities";
import {getAllProducts} from "../../redux/productsSlice";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list_container: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  products_container: {
    paddingLeft: 10,
    paddingRight: 10,
  }
});

export default function ProductsList() {
  const products = useSelector(getAllProducts);

  return (
    <FlatList
      data={products}
      style={styles.container}
      numColumns={getNumberOfProductsRows()}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list_container}
      columnWrapperStyle={styles.products_container}
      renderItem={({item}) => <Product product={item} />}
    />
  );
}