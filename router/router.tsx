import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import Home from '../screens/home';
import { StackParamList } from '../types';
import Cart from '../screens/cart';
import Header from '../components/header';
import ProductDetail from '../screens/productDetails';

const Stack = createNativeStackNavigator<StackParamList>();

export default function Router() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{
          header: ({ navigation, route }) => (
            <Header navigation={navigation} route={route} />
          ),
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen
          name="Details"
          component={ProductDetail}
          options={{
            headerShown: false,
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
