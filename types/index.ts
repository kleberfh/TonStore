import store from "../redux/store";

export type StackParamList = {
  Home: undefined;
  Cart: undefined;
}

export type TProductState = {
  count: number;
  products: TProduct[];
  status: 'loading' | 'error' | 'success' | 'idle';
}

export type TCartState = {
  count: number;
  products: TProduct[];
  value: number;
}

export type TProduct = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
}

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export interface IHeaderProps {
  navigation: any;
}

export interface IIconProps {
  size: number;
  color: string;
  thickness?: number;
}