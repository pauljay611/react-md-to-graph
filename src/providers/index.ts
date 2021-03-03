import React, {
	createContext,
	useContext,
	useReducer,
	createElement,
	Dispatch
} from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ISetting, Tags, ShapeNames, SettingsTypeOptions } from '../types'
import { Actions } from './ActionTypes'
import rawTextReducer from './rawTextReducer'
import settingsReducer from './settingsReducer'

type State = { rawText: string; settings: ISetting[] }

interface IContext {
	state: State
	dispatch: Dispatch<Actions>
}

export const defaultNode: ISetting = {
	id: uuidv4(),
	type: SettingsTypeOptions.Node,
	markdownTag: Tags.H1,
	typeText: 'Phase',
	shape: ShapeNames.Circle
}

export const defaultEdge: ISetting = {
	id: uuidv4(),
	type: SettingsTypeOptions.Edge,
	markdownTag: Tags.LI,
	typeText: 'Link',
	shape: ShapeNames.Edge
}

const defaultRawText: string = `# [md-test] md-text in editor
## [nodes-type] nodes settings in <type<Node>, markdownTag, shape, text>
## [edges-type] edges settings in <type<Edge>, markdownTag, shape, text>
### [nodes] nodes type in <type, title, props>
### [edges] edges type in <type, source, target, props>
# [graph-view] graph view
- md-test:nodes-type
- md-test:edges-type
- nodes-type:nodes
- edges-type:edges
- nodes:graph-view
- edges:graph-view`

const initialState: State = {
	rawText: defaultRawText,
	settings: [
		defaultNode,
		{
			typeText: 'Epic',
			shape: ShapeNames.Rectangle,
			id: uuidv4(),
			markdownTag: Tags.H2,
			type: SettingsTypeOptions.Node
		},
		{
			typeText: 'Item',
			shape: ShapeNames.Triangle,
			id: uuidv4(),
			markdownTag: Tags.H3,
			type: SettingsTypeOptions.Node
		},
		defaultEdge
	]
}

const Context = createContext<IContext>({
	state: initialState,
	dispatch: () => {}
})

function Reducers(state = {} as State, action: Actions) {
	return {
		rawText: rawTextReducer(state.rawText, action),
		settings: settingsReducer(state.settings, action)
	}
}

export const StateProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(Reducers, initialState)
	return createElement(
		Context.Provider,
		{
			value: {
				state,
				dispatch
			}
		},
		children
	)
}

export const useGlobalState = () => useContext(Context)
