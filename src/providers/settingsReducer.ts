import { ActionType,Actions, ISetting } from "../types";

const reducer = (state: ISetting[], action: Actions) => {
  switch (action.type) {
    case ActionType.SetSettings:
      return action.payload.value;
    default:
      return state;
  }
};

export default reducer;
