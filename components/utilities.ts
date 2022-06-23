import {Dimensions} from "react-native";

export const convertIntToMoney = (value: number): string => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(value / 100)

export const getNumberOfProductsRows = (): number => {
  return 2;
}

export const getProductsWidth = (): number => {
  const numberOfRows = getNumberOfProductsRows();
  const windowWidth = Dimensions.get("window").width;

  return (windowWidth / numberOfRows) - 10;
}