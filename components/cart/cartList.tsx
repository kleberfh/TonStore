import {View, Text, StyleSheet, FlatList} from "react-native";
import {getCartProducts} from "../../redux/cartSlice";
import {useSelector} from "react-redux";
import CartItem from "./cartItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 26,
    color: "#333",
    marginBottom: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  list_container: {
    paddingBottom: 40
  }
});

const CartHeader = ({ count }: { count: number }) => {
  return (
    <Text style={styles.header}>
      {count >= 1 ? `${count} ${count > 1 ? 'produtos' : 'produto'} em seu carrinho` : 'Seu carrinho está vazio 😕'}
    </Text>
  )
}

export default function CartList() {
  const cartProducts = useSelector(getCartProducts);

  return (
    <FlatList
      data={cartProducts}
      style={styles.container}
      contentContainerStyle={styles.list_container}
      renderItem={({item}) => <CartItem item={item} />}
      ListHeaderComponent={<CartHeader count={cartProducts.length} />}
    />
  );
}