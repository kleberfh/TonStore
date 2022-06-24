import {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import { Feather } from '@expo/vector-icons';
import {convertIntToMoney} from "../utilities";
import {AppDispatch, TProductCart} from "../../types";
import {removeProduct} from "../../redux/cartSlice";
import {View, Text, StyleSheet, Image, Pressable, Animated} from "react-native";
import {
  ROUNDED,
  SPACER_XS,
  SPACER_SM,
  TEXT_COLOR,
  FONT_SIZE_LG,
  FONT_SIZE_MD,
  SECONDARY_COLOR
} from "../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACER_SM,
    borderRadius: ROUNDED / 2,
    marginBottom: SPACER_SM,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: SECONDARY_COLOR,
  },
  image: {
    width: 60,
    height: 60,
  },
  info_container: {
    marginLeft: SPACER_SM,
    flexDirection: "column",
  },
  title: {
    color: TEXT_COLOR,
    fontWeight: "500",
    fontSize: FONT_SIZE_LG,
    marginBottom: SPACER_XS,
  },
  price: {
    color: "#8f8f8f",
    fontWeight: "500",
    fontSize: FONT_SIZE_MD,
  },
  button: {
    marginRight: SPACER_SM,
    marginLeft: "auto",
  }
});

export default function CartItem({ item }: { item: TProductCart }) {
  const dispatch: AppDispatch = useDispatch();
  const opacity = useRef(new Animated.Value(0)).current;

  const removeItem = () => {
    if (item.count === 1) {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        dispatch(removeProduct(item));
      });
    } else {
      dispatch(removeProduct(item));
    }
  }

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
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
          {convertIntToMoney(item.price)} x {item.count}
        </Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={removeItem}
      >
        <Feather name="trash-2" size={32} color="#ff2450" />
      </Pressable>
    </Animated.View>
  );
}