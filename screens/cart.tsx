import {View, Text, StyleSheet, StatusBar} from "react-native";
import Header from "../components/header";
import CartList from "../components/cart/cartList";
import CartFooter from "../components/cart/cartFooter";
import {BACKGROUND_COLOR} from "../components/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  }
});

export default function Cart() {
  return (
    <View style={styles.container}>
      <CartList />
      <CartFooter />
    </View>
  );
}