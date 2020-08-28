export enum ActionType {
    SetRawText = 'set-rawText'
}

export interface Node {
    type: string,
    textContent: string
}

export interface GraphNode {
    tag: string;
    content: string;
    target: string[];
}
