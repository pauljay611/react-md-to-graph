import { getTextNode } from './helpers'
import { Node, GraphNode } from '../types'

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
    getAllNodes(tagName: string): Node[]
    transGraphNode(): GraphNode
}

interface IGraphNode {
    GraphConfig: IGraphConfig
}

export default class MdToGraphNode implements IMdtoGraphNode {
    constructor(private mdText: string) {
        this.mdText = mdText
    }

    getAllNodes(tagName: string) {
        return getTextNode(this.mdText, tagName)
    }

    transGraphNode() {
        return {
            tag: '',
            content: '',
            target: ['']
        }
    }
}