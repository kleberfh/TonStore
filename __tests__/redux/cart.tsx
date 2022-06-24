import React from "react";
import store from "../../redux/store";
import {ProductExample} from "../../mocks/productMock";
import {addProduct, clearCart, removeProduct} from "../../redux/cartSlice";

describe("Cart actions", () => {
  store.dispatch(clearCart());

  it("to add item", () => {
    store.dispatch(addProduct(ProductExample));
    const cart = store.getState().cart;

    expect(cart.products.length).toEqual(1);
  });

  it("to increase item amount", () => {
    store.dispatch(addProduct(ProductExample));
    const cart = store.getState().cart;

    expect({
      cart_length: cart.products.length,
      product_amount: cart.products[0].count,
    }).toEqual({
      cart_length: 1,
      product_amount: 2,
    })
  });

  it("to remove item", () => {
    store.dispatch(removeProduct(ProductExample));
    const cart = store.getState().cart;

    expect(cart.products).toEqual([]);
  });

  it("to decrease item amount", () => {

  });
});