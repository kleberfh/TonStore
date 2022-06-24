import Badge from "./badge";
import { Feather } from '@expo/vector-icons';
import {Pressable, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {FONT_SIZE_2XL, SECONDARY_COLOR} from "../theme";

export default function CartButton() {
  const navigation = useNavigation();

  const handleOpenCart = () => {
    // @ts-ignore
    navigation.navigate("Cart");
  }

  return (
    <Pressable
      onPress={handleOpenCart}
    >
      <Badge />
      <Feather name="shopping-cart" size={FONT_SIZE_2XL} color={SECONDARY_COLOR} />
    </Pressable>
  )
}