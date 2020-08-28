export enum ActionType {
    SetRawText = 'set-rawText'
}

export interface Node<T> {
    type: string,
    textContent: string,
    props?: NodeProps<T>
}

export type NodeProps<T> = Record<string, T>

interface IGraphType {
    typeText?: string,
    shapeId: string,
    shape: JSX.Element,
}

export type IGraphTypes = Record<string, IGraphType>

export interface IGraphConfig {
    NodeTypes: IGraphTypes
    NodeSubtypes?: IGraphTypes
    EdgeTypes: IGraphTypes
}