import {View, Text, StyleSheet, StatusBar} from "react-native";
import Header from "../components/header";
import CartList from "../components/cart/cartList";
import Footer from "../components/cart/footer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  }
});

export default function Cart() {
  return (
    <View style={styles.container}>
      <CartList />
      <Footer />
    </View>
  );
}