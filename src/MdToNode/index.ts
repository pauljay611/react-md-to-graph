import { getTextNode } from './helpers'
import { Node, GraphNode, NodeProps } from '../types'

interface IGraphType {
    typeText: string,
    shapeID: string,
    shape: Element,
}

type IGraphTypes = Record<string, IGraphType>

interface IGraphConfig {
    NodeTypes: IGraphTypes
    NodeSubtypes: IGraphTypes
    EdgeTypes: IGraphTypes
}

interface IMdtoGraphNode {
    getAllNodes<T>(tagName: string): Node<T>[]
    transGraphNode(): GraphNode
}

interface IGraphNode {
    GraphConfig: IGraphConfig
}

export default class MdToGraphNode implements IMdtoGraphNode {
    constructor(private mdText: string, private tagNames: string[], private edgeNames: string[]) {
        this.mdText = mdText
        this.tagNames = tagNames
        this.edgeNames = edgeNames
    }

    getAllNodes<T>(tagName: string, props?: NodeProps<T>) {
        return getTextNode(this.mdText, tagName, props)
    }

    transGraphNode() {
        return {
            tag: '',
            content: '',
            target: ['']
        }
    }
}