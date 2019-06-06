import { INCREASE_COUNT, DECREASE_COUNT } from "../constants/actions-types";

const initialState = {
  count: 0
};
function rootReducer(state = initialState, action) {
  if (action.type === INCREASE_COUNT) {
    return {
      count: state.count + 1
    };
  }
  if (action.type === DECREASE_COUNT) {
    return {
      count: state.count - 1
    };
  }

  return state;
}
export default rootReducer;
