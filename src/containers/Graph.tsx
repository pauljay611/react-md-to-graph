import React from "react";
import { GraphView, INode } from "react-digraph";
import MarkdownIt from "markdown-it";

import { Wrapper } from "../components/Common";
import ErrorBoundary from "../components/ErrorBoundary";

import { createGraphConfig } from "../utils/graphConfig";
import { useGlobalState } from "../providers";
import MdToNode from "../MdToNode";

const NODE_KEY = "id";

const md = new MarkdownIt();

const Graph: React.FC = () => {
  const { state } = useGlobalState();

  const GraphConfig = createGraphConfig(state.settings);

  const { NodeTypes, NodeSubtypes, EdgeTypes } = GraphConfig;

  const raw = md.render(state.rawText);
  const mdNodes = new MdToNode(
    raw,
    Object.keys(NodeTypes),
    Object.keys(EdgeTypes),
    GraphConfig
  );
  const { nodes, edges } = mdNodes.transGraphNode();
  const onSelectNode = (val: INode) => {
    console.log(val);
  };

  return (
    <ErrorBoundary>
      <Wrapper width="50%">
        <GraphView
          nodeKey={NODE_KEY}
          nodes={nodes}
          edges={edges}
          selected={true}
          nodeTypes={NodeTypes}
          nodeSubtypes={NodeSubtypes}
          edgeTypes={EdgeTypes}
          layoutEngineType="VerticalTree"
          onSelectNode={onSelectNode}
          //   onCreateNode={this.onCreateNode}
          //   onUpdateNode={onUpdateNode}
          //   onDeleteNode={this.onDeleteNode}
          //   onSelectEdge={this.onSelectEdge}
          //   onCreateEdge={this.onCreateEdge}
          //   onSwapEdge={this.onSwapEdge}
          //   onDeleteEdge={this.onDeleteEdge}
        />
      </Wrapper>
    </ErrorBoundary>
  );
};

export default Graph;
