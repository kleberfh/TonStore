import React from "react";
import {find} from 'lodash';
import renderer from 'react-test-renderer';
import RenderWithProvider from "../../../mocks/renderWithProvider";

import store from "../../../redux/store";
import {ProductExample} from "../../../mocks/productMock";
import {addProduct} from "../../../redux/cartSlice";
import Cart from "../../../screens/cart";

describe("Cart products", () => {
  it("should render empty", () => {
    const cart = renderer.create(
      <RenderWithProvider>
        <Cart />
      </RenderWithProvider>
    );

    const hasEmptyCartText = find(cart.root.findAllByType('Text'), ['props.children', 'Seu carrinho está vazio 😕']);

    expect(hasEmptyCartText).not.toBe(undefined);
  });

  it("should render item", () => {
    store.dispatch(addProduct(ProductExample));

    const cart = renderer.create(
      <RenderWithProvider>
        <Cart />
      </RenderWithProvider>
    );

    const hasProductName = find(cart.root.findAllByType('Text'), ['props.children', ProductExample.title]);

    expect(hasProductName).not.toBe(undefined);
  });
});

