import { v4 as uuidv4 } from "uuid";
import { ISetting } from "../types";
import { SettingsActionType, SettingsPayload, Actions } from "./ActionTypes";
import { defaultNode } from "./index";

const reducer = (state: ISetting[], action: Actions): ISetting[] => {
  switch (action.type) {
    case SettingsActionType.AddSettings:
      return [...state, { ...defaultNode, id: uuidv4() }];
    case SettingsActionType.SetSettings:
      const { value, index } = action.payload.value as SettingsPayload;
      const newSettings = [...state];
      newSettings[index] = value;
      return newSettings;
    case SettingsActionType.RemoveSettings:
      return state.filter((_, i) => i !== action.payload.value);
    default:
      return state;
  }
};

export default reducer;
