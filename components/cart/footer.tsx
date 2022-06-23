import {View, Text, StyleSheet, Pressable} from "react-native";
import {getCartValue} from "../../redux/cartSlice";
import {useSelector} from "react-redux";
import {convertIntToMoney} from "../utilities";

const styles = StyleSheet.create({
  container: {
    height: 120,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.1,
    shadowColor: "#000",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  price: {
    fontSize: 24,
    color: "#333",
    fontWeight: '700',
    textAlign: 'center'
  },
  button: {
    padding: 10,
    width: '100%',
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowColor: "#000",
    backgroundColor: '#36e61a'
  },
  button_text: {
    fontSize: 26,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center'
  }
});

export default function Footer() {
  const value = useSelector(getCartValue);
  const isEmpty = value === 0;

  return (
    <View style={styles.container}>
      <Text style={styles.price}>
        Total: {convertIntToMoney(value)}
      </Text>
      <Pressable style={[styles.button, { backgroundColor: isEmpty ? '#8f8f8f' : '#36e61a'}]}>
        <Text style={styles.button_text}>
          Finalizar pedido
        </Text>
      </Pressable>
    </View>
  );
}