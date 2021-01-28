import React from "react";
import { createStore } from "redux";

const increment = () => {
  return { type: "INCREMENT" };
};

const decrement = () => {
  return { type: "DEREMENT" };
};

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

let store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());

export default function Duck() {
  return null;
}
