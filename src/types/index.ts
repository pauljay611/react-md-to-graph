export enum ActionType {
    SetRawText = 'set-rawText'
}

export interface Node<T> {
    type: string,
    textContent: string,
    props?: NodeProps<T>
}

export type NodeProps<T> = Record<string, T>

export interface GraphNode {
    tag: string;
    content: string;
    target: string[];
}