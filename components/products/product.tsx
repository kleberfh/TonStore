import {AppDispatch, TProduct} from "../../types";
import {useDispatch, useSelector} from "react-redux";
import {convertIntToMoney, getProductsWidth} from "../utilities";
import {View, Image, Text, Pressable, StyleSheet} from "react-native";
import {addProduct, getCartProducts, removeProduct} from "../../redux/cartSlice";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: getProductsWidth(),
  },
  content: {
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.10,
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: "#fff",
  },
  image: {
    width: 180,
    height: 100,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    width: '100%',
    color: "#000",
    marginTop: 10,
    fontWeight: "600",
    textAlign: "center",
  },
  price: {
    opacity: 0.6,
    marginTop: 5,
    fontSize: 18,
    width: '100%',
    color: "#333",
    fontWeight: "600",
    textAlign: "center",
  },
  button: {
    width: '80%',
    marginTop: 10,
    paddingTop: 10,
    paddingLeft: 20,
    marginBottom: 10,
    borderRadius: 80,
    paddingRight: 20,
    paddingBottom: 10,
    alignItems: "center",
  },
  button_text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  }
});

export default function Product(props: { product: TProduct }) {
  const { product } = props;
  const cart = useSelector(getCartProducts);
  const dispatch: AppDispatch = useDispatch();

  const isProductInCart = () => {
    return cart.find(item => item.id === product.id);
  }

  const addProductToCart = () => {
    dispatch(addProduct(product));
  }

  const removeProductFromCart = () => {
    dispatch(removeProduct(product));
  }

  const handleAction = () => {
    if (isProductInCart()) {
      removeProductFromCart()
    } else {
      addProductToCart()
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={{ uri: product.image }}
        />
        <Text style={styles.title}>
          {product.title}
        </Text>
        <Text style={styles.price}>
          {convertIntToMoney(product.price)}
        </Text>
        <Pressable
          onPress={handleAction}
          style={[styles.button, { backgroundColor: isProductInCart() ? '#ff2450' : '#36e61a' }]}
        >
          <Text style={styles.button_text}>
            {isProductInCart() ? 'Remover' : 'Adicionar'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}