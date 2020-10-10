import React from "react";
import { ShapeNames, ISetting, Tags, SettingsTypeOptions } from "../types";
import Shape from "../components/Shape";

type IShapeList = Record<ShapeNames, JSX.Element>;

interface INodeConfig {
  typeText: string;
  shapeId: string;
  shape: JSX.Element;
}

type INodeConfigs = Record<Tags, INodeConfig>;

type IEdgeConfigs = Record<Tags, IEdgeConfig>;

interface IEdgeConfig {
  shapeID: string;
  shape: JSX.Element;
}

interface IGraphConfig {
  NodeTypes: INodeConfigs;
  NodeSubtypes: INodeConfigs;
  EdgeTypes: IEdgeConfigs;
}

export const ShapeList: IShapeList = {
  Circle: <circle cx="50" cy="50" r="45" />,
  Rectangle: (
    <rect transform="translate(50, 5) rotate(45)" width="65" height="65" />
  ),
  Triangle: <polygon points="0,100  50,0  100,100" />,
  Edge: <circle cx="50" cy="50" r="20" fill="currentColor" />,
};

export const createNodeConfig = (settings: ISetting[]) => {
  const config = settings.reduce((prev: INodeConfigs, val: ISetting) => {
    const { markdownTag, typeText, shape } = val;
    const next = {
      ...prev,
      [markdownTag]: {
        typeText,
        shape: <Shape shape={ShapeList[shape]} id={markdownTag} size="100" />,
        shapeId: `#${markdownTag}`,
      },
    };
    return next;
  }, {} as INodeConfigs);
  return config;
};

export const createEdgeConfig = (settings: ISetting[]) => {
  const config = settings.reduce((prev: IEdgeConfigs, val: ISetting) => {
    const { markdownTag, shape } = val;
    const next = {
      ...prev,
      [markdownTag]: {
        shape: <Shape shape={ShapeList[shape]} id={markdownTag} size="100" />,
        shapeId: `#${markdownTag}`,
      },
    };
    return next;
  }, {} as IEdgeConfigs);
  return config;
};

export const createGraphConfig = (settings: ISetting[]): IGraphConfig => {
  const nodeSettings = settings.filter(
    (setting) => setting.type === SettingsTypeOptions.Node
  );
  const edgeSettings = settings.filter(
    (setting) => setting.type === SettingsTypeOptions.Edge
  );
  return {
    NodeTypes: createNodeConfig(nodeSettings),
    NodeSubtypes: {} as INodeConfigs,
    EdgeTypes: createEdgeConfig(edgeSettings),
  };
};
