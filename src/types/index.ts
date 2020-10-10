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

export interface ISetting {
  id: string;
  markdownTag: Tags;
  typeText: string;
  shape: ShapeNames;
}

export enum Tags {
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  H4 = "H4",
  H5 = "H5",
  LI = "LI",
}

export enum ShapeNames {
  Circle = "Circle",
  Rectangle = "Rectangle",
  Triangle = "Triangle",
}
