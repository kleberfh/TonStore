import {IHeaderProps} from "../types";
import CartButton from "./cart/cartButton";
import { AntDesign } from '@expo/vector-icons';
import {View, StyleSheet, Image, Pressable} from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#36e61a",
  },
  back_container: {
    width: '33,33%',
    paddingLeft: 20,
  },
  logo_container: {
    width: '33,33%',
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  cart: {
    width: '33,33%',
    paddingRight: 20,
    alignItems: "flex-end",
  }
});

export default function Header(props: IHeaderProps) {
  const { navigation } = props;

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.back_container}>
        {navigation.canGoBack() && (
          <Pressable onPress={goBack}>
            {/* @ts-ignore */}
            <AntDesign name="arrowleft" size={32} color="#fff" />
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