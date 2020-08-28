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
    getAllNodes(): Node[]
    transGraphNode(): GraphNode
}

interface IGraphNode {
    GraphConfig: IGraphConfig
}

export default class MdToGraphNode implements IMdtoGraphNode {
    constructor(private mdText: string) {
        this.mdText = mdText
    }

    getAllNodes() {
        return getTextNode(this.mdText, "H1")
    }

    transGraphNode() {
        return {
            tag: '',
            content: '',
            target: ['']
        }
    }
}