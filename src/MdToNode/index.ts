import { INode, IEdge } from 'react-digraph'
import { v4 as uuidv4 } from 'uuid'

import { getTextNode, getTextEdge, filteredIllegalText } from './helpers'
import { Node, NodeProps } from '../types'
import { IGraphConfig } from '../utils/graphConfig'

interface IMdToGraphNode {
	getAllNodes<T>(tagName: string): Node<T>[]
	transGraphNode(): IGraphNode
}

interface IGraphNode {
	GraphConfig: IGraphConfig
	nodes: INode[]
	edges: IEdge[]
}
/**
 * change markdown to graph with nodes and edges
 * @param {string} mdText - markdown raw text
 * @param {string} tagNames - tags for markdown html tag
 * @param {string} edgeNames - edges for markdown html tag
 * @param {string} graphConfig - graphConfig
 */
export default class MdToGraphNode implements IMdToGraphNode {
	constructor(
		private mdText: string,
		private tagNames: string[],
		private edgeNames: string[],
		private graphConfig: IGraphConfig
	) {
		this.mdText = mdText
		this.tagNames = tagNames
		this.edgeNames = edgeNames
		this.graphConfig = graphConfig
	}

	getAllNodes<T>(tagName: string, props?: NodeProps<T>) {
		return getTextNode(this.mdText, tagName, props)
	}

	getAllEdges<T>(
		tagName: string,
		nodesMap: Map<string, INode>,
		props?: NodeProps<T>
	) {
		return getTextEdge(this.mdText, tagName, props, nodesMap)
	}

	transGraphNode() {
		const nodes: INode[] = this.tagNames
			.map((name) =>
				this.getAllNodes<string>(name).map((node) => ({
					id: uuidv4(),
					type: filteredIllegalText(node.type),
					title: node.id,
					props: { ...node.props, textContent: node.textContent }
				}))
			)
			.reduce((acc, value) => [...acc, ...value], [])

		const nodesMap = new Map<string, INode>(
			nodes.map((node) => [node.title, node])
		)

		const edges: IEdge[] = this.edgeNames
			.map((name) => {
				return this.getAllEdges<string>(name, nodesMap).map((edge) => {
					return {
						type: edge.type,
						source: filteredIllegalText(edge.source),
						target: filteredIllegalText(edge.target),
						props: { ...edge.props, textContent: edge.textContent }
					}
				})
			})
			.reduce((acc, value) => [...acc, ...value], [])

		return {
			GraphConfig: this.graphConfig,
			nodes,
			edges
		}
	}
}
