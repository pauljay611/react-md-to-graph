export enum ActionType {
  SetRawText = "set-rawText",
}

export interface Node<T> {
  id: string;
  type: string;
  textContent: string;
  props?: NodeProps<T>;
}

export type NodeProps<T> = Record<string, T>;

export interface Edge<T> {
  source: string;
  target: string;
  type: string;
  textContent: string;
  props?: EdgeProps<T>;
}

export type EdgeProps<T> = Record<string, T>;

interface IGraphType {
  typeText?: string;
  shapeId: string;
  shape: JSX.Element;
}

export type IGraphTypes = Record<string, IGraphType>;

export interface IGraphConfig {
  NodeTypes: IGraphTypes;
  NodeSubtypes?: IGraphTypes;
  EdgeTypes: IGraphTypes;
}
