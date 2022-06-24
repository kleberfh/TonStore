import {AppDispatch, TProduct} from "../types";
import {Feather} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {convertIntToMoney} from "../components/utilities";
import {View, StyleSheet, Text, Image, Pressable} from "react-native";
import {
  ROUNDED,
  WIDTH_FULL,
  PRIMARY_COLOR,
  SECONDARY_COLOR, SPACER_2XL,
  BACKGROUND_COLOR, DANGER_COLOR,
  FONT_SIZE_2XL, FONT_SIZE_MD, FONT_SIZE_XL,
  SPACER_LG, SPACER_MD, SPACER_SM, SPACER_XL, SPACER_XS, TEXT_COLOR
} from "../components/theme";
import {useDispatch, useSelector} from "react-redux";
import {addProduct, getCartProducts, removeProduct} from "../redux/cartSlice";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: SECONDARY_COLOR,
  },
  header: {
    width: WIDTH_FULL,
    padding: SPACER_LG,
    paddingBottom: SPACER_2XL,
    borderBottomLeftRadius: ROUNDED,
    borderBottomRightRadius: ROUNDED,
    backgroundColor: BACKGROUND_COLOR,
  },
  image: {
    height: 250,
    width: WIDTH_FULL,
  },
  info_container: {
    flex: 1,
    width: WIDTH_FULL,
    padding: SPACER_LG,
    marginTop: SPACER_LG,
    backgroundColor: SECONDARY_COLOR,
  },
  row: {
    flexDirection: "row",
    marginBottom: SPACER_SM,
    justifyContent: "space-between",
  },
  title: {
    color: TEXT_COLOR,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FONT_SIZE_2XL,
  },
  price: {
    color: TEXT_COLOR,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: FONT_SIZE_XL,
  },
  features: {
    alignSelf: "flex-start",
    marginVertical: SPACER_XL,
  },
  feature: {
    opacity: 0.8,
    fontWeight: "400",
    color: TEXT_COLOR,
    fontSize: FONT_SIZE_MD,
    marginBottom: SPACER_SM,
  },
  amount_container: {
    marginTop: 'auto',
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amount_text: {
    fontWeight: "600",
    color: TEXT_COLOR,
    fontSize: FONT_SIZE_XL,
  },
  amount_button: {
    padding: SPACER_XS,
    flexDirection: "row",
    borderRadius: ROUNDED / 4,
    backgroundColor: BACKGROUND_COLOR,
  },
  amount_button_text: {
    margin: SPACER_SM,
    fontWeight: "600",
    color: TEXT_COLOR,
    fontSize: FONT_SIZE_XL,
  },
  button: {
    width: WIDTH_FULL,
    alignItems: "center",
    marginVertical: SPACER_LG,
    borderRadius: ROUNDED * 2,
    paddingVertical: SPACER_MD,
    paddingHorizontal: SPACER_LG,
  },
  button_text: {
    fontWeight: "500",
    color: SECONDARY_COLOR,
    fontSize: FONT_SIZE_XL,
  },
});

export default function ProductDetail({ route }: { route: { params: { product: TProduct } } }) {
  const { product } = route.params;
  const navigation = useNavigation();
  const cart = useSelector(getCartProducts);
  const dispatch: AppDispatch = useDispatch();

  const amountInCart = () => {
    const productInCart = cart.find(p => p.id === product.id);
    return productInCart ? productInCart.count : 0;
  }

  const addProductToCart = () => {
    dispatch(addProduct(product));
  }

  const removeProductFromCart = () => {
    dispatch(removeProduct({...product, count: amountInCart()}));
  }

  const addItemToCart = () => {
    if (amountInCart() > 0) {
      removeProductFromCart();
    } else {
      addProductToCart();
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={{ alignSelf: 'flex-end'}} onPress={navigation.goBack}>
          <Feather name={'x'} size={42} color="#333" />
        </Pressable>
        <Image style={styles.image} source={{ uri: product.image }} resizeMode={'contain'} />
      </View>
      <View style={styles.info_container}>
        <View style={styles.row}>
          <Text style={styles.title}>
            {product.title}
          </Text>
          <Text style={styles.price}>
            {convertIntToMoney(product.price)}
          </Text>
        </View>
        <View style={styles.features}>
          {product.features.map((feature, index) => (
            <Text style={styles.feature} key={index.toString()}>
              {feature}
            </Text>
          ))}
        </View>
        <View style={styles.amount_container}>
          <Text style={styles.amount_text}>
            Quantidade
          </Text>
          <View style={styles.amount_button}>
            <Pressable
              onPress={removeProductFromCart}
              style={styles.amount_button_text}
            >
              <Feather name={'minus'} size={FONT_SIZE_XL} color={TEXT_COLOR} />
            </Pressable>
            <Text style={styles.amount_button_text}>
              {amountInCart()}
            </Text>
            <Pressable
              onPress={addProductToCart}
              style={styles.amount_button_text}
            >
              <Feather name={'plus'} size={FONT_SIZE_XL} color={TEXT_COLOR} />
            </Pressable>
          </View>
        </View>
        <Pressable
          onPress={addItemToCart}
          style={[styles.button, { backgroundColor: amountInCart() > 0 ? DANGER_COLOR : PRIMARY_COLOR }]}
        >
          <Text style={styles.button_text}>
            {amountInCart() > 0 ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}