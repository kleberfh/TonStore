import {View, StyleSheet} from "react-native";
import Loading from "../components/loading";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts, getProductsStatus} from "../redux/productsSlice";
import ProductsList from "../components/products/productsList";
import {AppDispatch} from "../types";
import {useEffect} from "react";
import {BACKGROUND_COLOR, FONT_SIZE_3XL, PRIMARY_COLOR} from "../components/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  content: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const status = useSelector(getProductsStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
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