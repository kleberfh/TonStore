import {useDispatch} from "react-redux";
import { Feather } from '@expo/vector-icons';
import {convertIntToMoney} from "../utilities";
import {AppDispatch, TProduct} from "../../types";
import {removeProduct} from "../../redux/cartSlice";
import {View, Text, StyleSheet, Image, Pressable} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 60,
    height: 80,
  },
  info_container: {
    flexDirection: "column",
  },
  title: {
    fontSize: 26,
    color: "#333",
    marginLeft: 10,
    fontWeight: "500",
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    color: "#8f8f8f",
    marginLeft: 10,
    fontWeight: "500",
  },
  button: {
    marginRight: 10,
    marginLeft: "auto",
  }
});

export default function CartItem({ item }: { item: TProduct }) {
  const dispatch: AppDispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeProduct(item));
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode={"contain"}
        source={{ uri: item.image }}
      />
      <View style={styles.info_container}>
        <Text style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.price}>
          {convertIntToMoney(item.price)}
        </Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={removeItem}
      >
        {/* @ts-ignore */}
        <Feather name="trash-2" size={32} color="#ff2450" />
      </Pressable>
    </View>
  );
}