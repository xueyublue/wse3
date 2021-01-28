const increment = () => {
  return { type: "INCREMENT" };
};

const decrement = () => {
  return { type: "DEREMENT" };
};

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      state + 1;
      break;

    case "DECREMENT":
      state - 1;
      break;

    default:
      break;
  }
};

let store = createStore(counter);
