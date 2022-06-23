import {Animated, Text, StyleSheet} from "react-native";
import {getCartProducts} from "../../redux/cartSlice";
import {useSelector} from "react-redux";
import CartItem from "./cartItem";
import {FONT_SIZE_XL, SPACER_LG, TEXT_COLOR} from "../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACER_LG,
  },
  header: {
    fontSize: FONT_SIZE_XL,
    color: TEXT_COLOR,
    marginBottom: SPACER_LG,
    fontWeight: "600",
    textAlign: "center",
  },
  list_container: {
    paddingBottom: SPACER_LG * 2
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
    <Animated.FlatList
      data={cartProducts}
      style={styles.container}
      contentContainerStyle={styles.list_container}
      renderItem={({item}) => <CartItem item={item} />}
      ListHeaderComponent={<CartHeader count={cartProducts.length} />}
    />
  );
}