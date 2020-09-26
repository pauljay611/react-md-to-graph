import React from "react";
import { GraphView, INode } from "react-digraph";
import MarkdownIt from "markdown-it";
import { Wrapper } from "../components/Common";
import { GraphConfig } from "../utils/graphConfig";
import { useGlobalState } from "../providers";
import MdToNode from "../MdToNode";

const NODE_KEY = "id";

const md = new MarkdownIt();

const Graph: React.FC = () => {
  const NodeTypes = GraphConfig.NodeTypes;
  const NodeSubtypes = GraphConfig.NodeSubtypes;
  const EdgeTypes = GraphConfig.EdgeTypes;

  const { state } = useGlobalState();
  const raw = md.render(state.rawText);
  const mdNodes = new MdToNode(raw, ["H1", "H2"], ["LI"], GraphConfig);
  const nodes = mdNodes.transGraphNode().Node;
  const edges = mdNodes.transGraphNode().Edge;

  const onSelectNode = (val: INode) => {
    console.log(val);
  };

  return (
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