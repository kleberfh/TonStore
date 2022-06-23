import {useSelector} from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import {getCartCount} from "../../redux/cartSlice";

const styles = StyleSheet.create({
  container: {
    top: -5,
    width: 20,
    height: 20,
    right: -10,
    zIndex : 1,
    borderRadius: 40,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff2450",
  },
  count: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  }
});

export default function Badge() {
  const count = useSelector(getCartCount);

  if (!count) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.count}>
        {count}
      </Text>
    </View>
  );
}