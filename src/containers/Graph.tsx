import React from "react";
import { GraphView, IEdge, INode } from "react-digraph";
import { Wrapper } from "../components/Common";

const GraphConfig = {
  NodeTypes: {
    empty: {
      // required to show empty nodes
      typeText: "None",
      shapeId: "#empty", // relates to the type property of a node
      shape: (
        <symbol viewBox="0 0 100 100" id="empty" key="0">
          <circle cx="50" cy="50" r="45"></circle>
        </symbol>
      ),
    },
    custom: {
      // required to show empty nodes
      typeText: "Custom",
      shapeId: "#custom", // relates to the type property of a node
      shape: (
        <symbol
          viewBox="0 0 100 100"
          id="custom"
          key="0"
          width="100"
          height="100"
        >
          <rect
            transform="translate(50, 5) rotate(45)"
            width="65"
            height="65"
          />
        </symbol>
      ),
    },
  },
  NodeSubtypes: {},
  EdgeTypes: {
    emptyEdge: {
      // required to show empty edges
      shapeId: "#emptyEdge",
      shape: (
        <symbol viewBox="0 0 50 50" id="emptyEdge" key="0">
          <circle cx="25" cy="25" r="8" fill="currentColor">
            {" "}
          </circle>
        </symbol>
      ),
    },
  },
};

const { nodes, edges }: { nodes: INode[]; edges: IEdge[] } = {
  nodes: [
    {
      id: 1,
      title: "Node A",
      type: "empty",
    },
    {
      id: 2,
      title: "Node B",
      type: "empty",
    },
    {
      id: 3,
      title: "Node C",
      type: "custom",
    },
    {
      id: 4,
      title: "Node C",
      type: "custom",
    },
  ],
  edges: [
    {
      source: "1",
      target: "2",
      type: "emptyEdge",
    },
    {
      source: "2",
      target: "4",
      type: "emptyEdge",
    },
    {
      source: "3",
      target: "4",
      type: "emptyEdge",
    },
  ],
};

const NODE_KEY = "id";

const Graph = () => {
  const NodeTypes = GraphConfig.NodeTypes;
  const NodeSubtypes = GraphConfig.NodeSubtypes;
  const EdgeTypes = GraphConfig.EdgeTypes;

  return (
    <Wrapper>
      <GraphView
        // ref="GraphView"
        nodeKey={NODE_KEY}
        nodes={nodes}
        edges={edges}
        selected={true}
        nodeTypes={NodeTypes}
        nodeSubtypes={NodeSubtypes}
        edgeTypes={EdgeTypes}
        layoutEngineType="HorizontalTree"
        //   onSelectNode={this.onSelectNode}
        //   onCreateNode={this.onCreateNode}
        //   onUpdateNode={this.onUpdateNode}
        //   onDeleteNode={this.onDeleteNode}
        //   onSelectEdge={this.onSelectEdge}
        //   onCreateEdge={this.onCreateEdge}
        //   onSwapEdge={this.onSwapEdge}
        //   onDeleteEdge={this.onDeleteEdge}
      />
    </Wrapper>
  );
};

export default Graph;
