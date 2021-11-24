import { INCREMENT, DECREMENT } from "./constants";

const initState = 0;

export const count = (state = initState, { type, playload }) => {
  switch (type) {
    case INCREMENT:
      return state + playload;
    case DECREMENT:
      return state - playload;
    default:
      return state;
  }
};
