import Badge from "./badge";
import { Feather } from '@expo/vector-icons';
import {Pressable, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {

  }
});

export default function CartButton() {
  const navigation = useNavigation();

  const handleOpenCart = () => {
    // @ts-ignore
    navigation.navigate("Cart");
  }

  return (
    <Pressable
      onPress={handleOpenCart}
      style={styles.container}
    >
      <Badge />
      {/* @ts-ignore */}
      <Feather name="shopping-cart" size={32} color="#fff" />
    </Pressable>
  )
}