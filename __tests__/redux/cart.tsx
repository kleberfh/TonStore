import React from "react";
import store from "../../redux/store";
import {ProductExample} from "../../mocks/productMock";
import {addProduct, clearCart, removeProduct} from "../../redux/cartSlice";

describe("Cart actions", () => {
  store.dispatch(clearCart());

  it("to add item and change its amount", () => {
    store.dispatch(addProduct(ProductExample));
    const cart = store.getState().cart;

    expect(cart.products.length).toEqual(1);
  });

  it("to increase item amount", () => {
    store.dispatch(addProduct(ProductExample));
    const cart = store.getState().cart;

    expect([cart.products.length, cart.products[0].count])
      .toEqual([1, 2]);
  });

  it("to be increasing cart total value", () => {
    const cart = store.getState().cart;

    expect(cart.value).toEqual(ProductExample.price * 2);
  });

  it("to decrease item amount", () => {
    store.dispatch(removeProduct({...ProductExample, count: 2}));
    const cart = store.getState().cart;

    expect([cart.products.length, cart.products[0].count]).toEqual([1, 1]);
  });

  it("to remove item", () => {
    store.dispatch(removeProduct(ProductExample));
    const cart = store.getState().cart;

    expect(cart.products).toEqual([]);
  });

  it("to be decreasing cart total value", () => {
    const cart = store.getState().cart;

    expect(cart.value).toEqual(0);
  });
});