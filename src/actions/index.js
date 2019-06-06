import { INCREASE_COUNT, DECREASE_COUNT } from "../constants/actions-types";

export function increaseCount(value) {
  return { type: INCREASE_COUNT, value };
}

export function decreaseCount(value) {
  return { type: DECREASE_COUNT, value };
}
