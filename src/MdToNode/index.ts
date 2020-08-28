import { getTextNode } from './helpers'
import { Node, NodeProps, IGraphConfig } from '../types'
import { INode, IEdge } from 'react-digraph'

interface IMdtoGraphNode {
    getAllNodes<T>(tagName: string): Node<T>[]
    transGraphNode(): IGraphNode
}

interface IGraphNode {
    GraphConfig: IGraphConfig,
    Node: INode[],
    Edge: IEdge[]
}

export default class MdToGraphNode implements IMdtoGraphNode {
    constructor(private mdText: string, private tagNames: string[], private edgeNames: string[], private graphConfig: IGraphConfig) {
        this.mdText = mdText
        this.tagNames = tagNames
        this.edgeNames = edgeNames
        this.graphConfig = graphConfig
    }

    getAllNodes<T>(tagName: string, props?: NodeProps<T>) {
        return getTextNode(this.mdText, tagName, props)
    }

    transGraphNode() {
        const nodes: INode[] = this.tagNames.map(name => this.getAllNodes<string>(name)
            .map(node => ({ type: node.type, title: node.textContent, props: node.props })))
            .reduce((acc, value) => ([...acc, ...value]), [])

        const edges: IEdge[] = this.edgeNames.map(name => this.getAllNodes<string>(name, { source: 'H1' })
            .map(node => ({ type: node.type, source: node.props.source, target: node.textContent, props: node.props })))
            .reduce((acc, value) => ([...acc, ...value]), [])


        return {
            GraphConfig: this.graphConfig,
            Node: nodes,
            Edge: edges
        }
    }
}