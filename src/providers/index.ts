import React, {
  createContext,
  useContext,
  useReducer,
  createElement,
  Dispatch,
} from "react";
import { ActionType } from "../types";

type State = { rawText: string };

type Action = { type: ActionType.SetRawText; payload: { value: string } };

interface IContext {
  state: State;
  dispatch: Dispatch<Action>;
}

const initialState: State = {
  rawText: `# 2008 TW Momo // write something in markdown`,
};

const Context = createContext<IContext>({
  state: initialState,
  dispatch: () => {},
});

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.SetRawText:
    default:
      return { ...state, rawText: action.payload.value };
  }
};

export const StateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
