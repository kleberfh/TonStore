import store from "../redux/store";

export type StackParamList = {
  Home: undefined;
  Cart: undefined;
  Details: { product: IProduct };
}

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  features: string[];
}

export interface IProductState {
  count: number;
  products: IProduct[];
  status: 'loading' | 'error' | 'success' | 'idle';
}

export interface IProductCart extends IProduct {
  count: number;
}

export interface ICartState {
  count: number;
  value: number;
  products: IProductCart[];
}

export interface IHeaderProps {
  route: any;
  navigation: any;
}

export interface IIconProps {
  size: number;
  color: string;
  thickness?: number;
}