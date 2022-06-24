import { Dimensions } from 'react-native';
import { PRODUCT_ROWS } from './theme';

export const convertIntToMoney = (value: number): string =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value / 100);

export const getProductsWidth = (): number => {
  const numberOfRows = PRODUCT_ROWS;
  const windowWidth = Dimensions.get('window').width;

  return windowWidth / numberOfRows - 10;
};
