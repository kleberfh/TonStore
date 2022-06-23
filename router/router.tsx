import Home from "../screens/home";
import {StackParamList} from "../types";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from "../screens/cart";
import Header from "../components/header";

const Stack = createNativeStackNavigator<StackParamList>();

export default function Router() {
  return (
    <NavigationContainer>
      {/* @ts-ignore */}
      <Stack.Navigator
        screenOptions={{
          header: ({navigation}) => {
            return <Header navigation={navigation} />;
          }
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}