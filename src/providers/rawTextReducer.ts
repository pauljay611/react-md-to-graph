import { RawActionType, Actions } from "./ActionTypes";

const reducer = (state: string, action: Actions) => {
  switch (action.type) {
    case RawActionType.SetRawText:
      return action.payload.value;
    default:
      return state;
  }
};

export default reducer;
