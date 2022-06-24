import React from "react";
import renderer from 'react-test-renderer';
import RenderWithProvider from "../../../mocks/renderWithProvider";

import store from "../../../redux/store";
import {ProductExample} from "../../../mocks/productMock";
import Badge from "../../../components/cart/badge";
import {addProduct} from "../../../redux/cartSlice";

describe("Cart Badge", () => {
  it("should not render when empty", () => {
    const tree = renderer.create(
      <RenderWithProvider>
        <Badge />
      </RenderWithProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("shound render when counter has value", () => {
    store.dispatch(addProduct(ProductExample));
    const tree = renderer.create(
      <RenderWithProvider>
        <Badge />
      </RenderWithProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

