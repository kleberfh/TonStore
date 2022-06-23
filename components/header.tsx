import {IHeaderProps} from "../types";
import CartButton from "./cart/cartButton";
import { AntDesign } from '@expo/vector-icons';
import {View, StyleSheet, Image, Pressable} from "react-native";
import {FONT_SIZE_2XL, PRIMARY_COLOR, SECONDARY_COLOR, SPACER_2XL, SPACER_LG, WIDTH_1_3} from "./theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: SPACER_2XL,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: PRIMARY_COLOR,
  },
  back_container: {
    width: WIDTH_1_3,
    paddingLeft: SPACER_LG,
  },
  logo_container: {
    width: WIDTH_1_3,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  cart: {
    width: WIDTH_1_3,
    paddingRight: SPACER_LG,
    alignItems: "flex-end",
  }
});

export default function Header(props: IHeaderProps) {
  const { navigation, route } = props;

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.back_container}>
        {route.name === 'Cart' && (
          <Pressable onPress={goBack}>
            {/* @ts-ignore */}
            <AntDesign name="arrowleft" size={FONT_SIZE_2XL} color={SECONDARY_COLOR} />
          </Pressable>
        )}
      </View>
      <View style={styles.logo_container}>
        <Image source={require("../assets/ton_white.png")} style={styles.logo} />
      </View>
      <View style={styles.cart}>
        <CartButton />
      </View>
    </View>
  );
}