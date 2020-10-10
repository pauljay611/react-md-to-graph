import React, {
  createContext,
  useContext,
  useReducer,
  createElement,
  Dispatch,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { ISetting, Tags, ShapeNames, SettingsTypeOptions } from "../types";
import { Actions } from "./ActionTypes";
import rawTextReducer from "./rawTextReducer";
import settingsReducer from "./settingsReducer";

type State = { rawText: string; settings: ISetting[] };

interface IContext {
  state: State;
  dispatch: Dispatch<Actions>;
}

export const defaultNode: ISetting = {
  id: uuidv4(),
  type: SettingsTypeOptions.Node,
  markdownTag: Tags.H1,
  typeText: "Phase",
  shape: ShapeNames.Circle,
};

export const defaultEdge: ISetting = {
  id: uuidv4(),
  type: SettingsTypeOptions.Edge,
  markdownTag: Tags.LI,
  typeText: "Phase",
  shape: ShapeNames.Edge,
};

const defaultRawText: string = `# [2008] TW Momo // write something in markdown
## [2009] TW Momo // write something in markdown
- 2008:2009`;

const initialState: State = {
  rawText: defaultRawText,
  settings: [
    defaultNode,
    {
      ...defaultNode,
      shape: ShapeNames.Rectangle,
      id: uuidv4(),
      markdownTag: Tags.H2,
    },
    defaultEdge,
  ],
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
