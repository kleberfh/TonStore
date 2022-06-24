import {View, Text, StyleSheet, Pressable, Linking} from "react-native";
import {getCartValue} from "../../redux/cartSlice";
import {useSelector} from "react-redux";
import {convertIntToMoney} from "../utilities";
import {
  FONT_SIZE_LG,
  FONT_SIZE_XL,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SHADOW_COLOR,
  SPACER_LG,
  SPACER_SM,
  TEXT_COLOR, WIDTH_FULL
} from "../theme";

const styles = StyleSheet.create({
  container: {
    height: 120,
    paddingTop: SPACER_SM,
    paddingBottom: SPACER_LG,
    paddingHorizontal: SPACER_LG,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.1,
    shadowColor: SHADOW_COLOR,
    backgroundColor: SECONDARY_COLOR,
    borderTopLeftRadius: SPACER_LG,
    borderTopRightRadius: SPACER_LG,
  },
  price: {
    fontSize: FONT_SIZE_LG,
    color: TEXT_COLOR,
    fontWeight: '700',
    textAlign: 'center'
  },
  button: {
    padding: SPACER_SM,
    width: WIDTH_FULL,
    marginTop: SPACER_SM,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowColor: SHADOW_COLOR,
    backgroundColor: PRIMARY_COLOR
  },
  button_text: {
    fontSize: FONT_SIZE_XL,
    color: SECONDARY_COLOR,
    fontWeight: '700',
    textAlign: 'center'
  }
});

export default function CartFooter() {
  const value = useSelector(getCartValue);
  const isEmpty = value === 0;

  const handlePurchase = () => {
    Linking.openURL('https://www.ton.com.br');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.price}>
        Total: {convertIntToMoney(value)}
      </Text>
      <Pressable
        disabled={isEmpty}
        onPress={handlePurchase}
        style={[styles.button, { backgroundColor: isEmpty ? '#8f8f8f' : PRIMARY_COLOR}]}
      >
        <Text style={styles.button_text}>
          Finalizar pedido
        </Text>
      </Pressable>
    </View>
  );
}