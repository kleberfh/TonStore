import React from "react";
import {Provider} from "react-redux";
import store from "../redux/store";

export default function RenderWithProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}