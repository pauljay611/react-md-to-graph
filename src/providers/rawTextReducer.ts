import { ActionType,Actions } from "../types";

const reducer = (state: string, action: Actions) => {
  switch (action.type) {
    case ActionType.SetRawText:
      return action.payload.value
    default:
      return state
  }
};

export default reducer;
