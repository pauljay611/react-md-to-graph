import React, {
  createContext,
  useContext,
  useReducer,
  createElement,
  Dispatch,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { ISetting, Tags, ShapeNames } from "../types";
import { Actions } from "./ActionTypes";
import rawTextReducer from "./rawTextReducer";
import settingsReducer from "./settingsReducer";

type State = { rawText: string; settings: ISetting[] };

interface IContext {
  state: State;
  dispatch: Dispatch<Actions>;
}

export const defaultSettings: ISetting = {
  id: uuidv4(),
  markdownTag: Tags.H1,
  typeText: "Phase",
  shape: ShapeNames.Circle,
};

const defaultRawText: string = `# [2008] TW Momo // write something in markdown
## [2009] TW Momo // write something in markdown
- 2008:2009`;

const initialState: State = {
  rawText: defaultRawText,
  settings: [defaultSettings],
};

const Context = createContext<IContext>({
  state: initialState,
  dispatch: () => {},
});

function Reducers(state = {} as State, action: Actions) {
  return {
    rawText: rawTextReducer(state.rawText, action),
    settings: settingsReducer(state.settings, action),
  };
}

export const StateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(Reducers, initialState);
  return createElement(
    Context.Provider,
    {
      value: {
        state,
        dispatch,
      },
    },
    children
  );
};

export const useGlobalState = () => useContext(Context);
