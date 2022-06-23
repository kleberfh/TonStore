import {AppDispatch, TProduct} from "../../types";
import {useDispatch, useSelector} from "react-redux";
import {convertIntToMoney, getProductsWidth} from "../utilities";
import {View, Image, Text, Pressable, StyleSheet} from "react-native";
import {addProduct, getCartProducts, removeProduct} from "../../redux/cartSlice";
import {
  DANGER_COLOR,
  FONT_SIZE_LG, FONT_SIZE_MD, FONT_SIZE_SM, PRIMARY_COLOR,
  ROUNDED,
  SECONDARY_COLOR,
  SHADOW_COLOR, SPACER_MD,
  SPACER_SM, SPACER_XS,
  TEXT_COLOR,
  TEXT_OPACITY,
  WIDTH_FULL
} from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: SPACER_SM,
    width: getProductsWidth(),
  },
  content: {
    borderRadius: ROUNDED / 2,
    shadowColor: SHADOW_COLOR,
    shadowOpacity: 0.10,
    alignItems: "center",
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
    fontWeight: "600",
    textAlign: "center",
  },
  price: {
    opacity: TEXT_OPACITY,
    marginTop: SPACER_XS,
    fontSize: FONT_SIZE_SM,
    width: WIDTH_FULL,
    color: TEXT_COLOR,
    fontWeight: "600",
    textAlign: "center",
  },
  button: {
    width: '80%',
    marginVertical: SPACER_SM,
    paddingVertical: SPACER_SM,
    paddingHorizontal: SPACER_MD,
    borderRadius: ROUNDED * 2,
    alignItems: "center",
  },
  button_text: {
    fontSize: FONT_SIZE_MD,
    color: SECONDARY_COLOR,
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
          style={[styles.button, { backgroundColor: isProductInCart() ? DANGER_COLOR : PRIMARY_COLOR }]}
        >
          <Text style={styles.button_text}>
            {isProductInCart() ? 'Remover' : 'Adicionar'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}