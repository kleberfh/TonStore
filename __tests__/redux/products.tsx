import React from "react";
import store from "../../redux/store";
import {fetchProducts} from "../../redux/productsSlice";

describe("Products actions", () => {
  it("to have initial state", () => {
    const state = store.getState();
    expect(state.products).toEqual({count: 0, products: [], status: 'idle'})
  });

  it("to fetch initial items", () => {
    store.dispatch(fetchProducts());
    const state = store.getState();

    expect(state.products.status).toEqual('loading');
  });
});