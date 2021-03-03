import { IEdge, INode } from 'react-digraph'
import { v4 as uuidv4 } from 'uuid'
import MarkdownIt from 'markdown-it'
import { ISetting, SettingsTypeOptions, ShapeNames, Tags } from '../../types'
import { createGraphConfig, IGraphConfig } from '../../utils/graphConfig'
import MdToGraphNode from '../index'

const md = new MarkdownIt()

const mockSettings: ISetting[] = [
	{
		id: uuidv4(),
		type: SettingsTypeOptions.Node,
		markdownTag: Tags.H1,
		typeText: 'Phase',
		shape: ShapeNames.Circle
	},
	{
		id: uuidv4(),
		type: SettingsTypeOptions.Node,
		markdownTag: Tags.H2,
		typeText: 'Epic',
		shape: ShapeNames.Edge
	},
	{
		id: uuidv4(),
		type: SettingsTypeOptions.Edge,
		markdownTag: Tags.LI,
		typeText: 'Link',
		shape: ShapeNames.Edge
	}
]
const mockMdRawText = `# [2008] // write something in markdown
## [2009] // write something in markdown
- 2008:2009`

const mockGraphConfig: IGraphConfig = createGraphConfig(mockSettings)

const { NodeTypes, EdgeTypes } = mockGraphConfig

const expectedNodes: INode[] = [
	{
		id: '',
		type: 'H1',
		title: '2008',
		props: { textContent: '// write something in markdown' }
	},
	{
		id: '',
		type: 'H2',
		title: '2009',
		props: { textContent: '// write something in markdown' }
	}
]
const expectedEdges: IEdge[] = [
	{
		type: 'LI',
		source: 'b7fb0dae-8119-45f8-8533-4e31e6d749bb',
		target: 'dffc92df-886c-4a73-aced-705b16234fa8',
		props: { textContent: '' }
	}
]

describe('MdToGraphNode testing', () => {
	const mdNodes = new MdToGraphNode(
		md.render(mockMdRawText),
		Object.keys(NodeTypes),
		Object.keys(EdgeTypes),
		mockGraphConfig
	)
	const { nodes, edges, nodesMap } = mdNodes.transGraphNode()
	const sourceID = nodesMap.get('2008')?.id ?? ''
	const targetID = nodesMap.get('2009')?.id ?? ''
	expectedNodes[0].id = sourceID
	expectedNodes[1].id = targetID
	test('return correct nodes', () => {
		expect(nodes).toEqual(expectedNodes)
	})
	test('return correct edges', () => {
		expectedEdges[0].source = sourceID
		expectedEdges[0].target = targetID
		expect(edges).toEqual(expectedEdges)
	})
})
