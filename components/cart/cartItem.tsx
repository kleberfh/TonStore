import {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import { Feather } from '@expo/vector-icons';
import {convertIntToMoney} from "../utilities";
import {AppDispatch, TProduct} from "../../types";
import {removeProduct} from "../../redux/cartSlice";
import {View, Text, StyleSheet, Image, Pressable, Animated} from "react-native";
import {FONT_SIZE_MD, FONT_SIZE_XL, ROUNDED, SECONDARY_COLOR, SPACER_LG, SPACER_SM, TEXT_COLOR} from "../theme";

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
    height: 80,
  },
  info_container: {
    flexDirection: "column",
  },
  title: {
    fontSize: FONT_SIZE_XL,
    color: TEXT_COLOR,
    marginLeft: SPACER_SM,
    fontWeight: "500",
    marginBottom: SPACER_LG,
  },
  price: {
    fontSize: FONT_SIZE_MD,
    color: "#8f8f8f",
    marginLeft: SPACER_SM,
    fontWeight: "500",
  },
  button: {
    marginRight: SPACER_SM,
    marginLeft: "auto",
  }
});

export default function CartItem({ item }: { item: TProduct }) {
  const dispatch: AppDispatch = useDispatch();
  const opacity = useRef(new Animated.Value(0)).current;

  const removeItem = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      dispatch(removeProduct(item));
    });
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
    </Animated.View>
  );
}