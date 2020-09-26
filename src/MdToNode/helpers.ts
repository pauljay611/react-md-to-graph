import { Node, NodeProps, EdgeProps, Edge } from "../types";

/**
 * get markdown raw text to Node object
 * @param {string} raw - markdown raw text
 * @param {string} nodeTags - tags for markdown html tag
 */

function createDomNodeByText(domText: string, nodeTag: string) {
  const parser = new DOMParser();
  const domTree = parser
    .parseFromString(domText, "text/html")
    .querySelector("body");

  return Array.from(domTree.querySelectorAll(nodeTag));
}

export function getTextNode<T>(
  raw: string,
  nodeTag: string,
  props: NodeProps<T>
): Node<T>[] {
  return createDomNodeByText(raw, nodeTag).map((node) => {
    const [id = ""] = node.textContent.split(" ");
    return {
      id,
      type: node.tagName,
      textContent: node.textContent.split(id).join(""),
      props,
    };
  });
}

export function getTextEdge<T>(
  raw: string,
  nodeTag: string,
  props: EdgeProps<T>
): Edge<T>[] {
  return createDomNodeByText(raw, nodeTag).map((node) => {
    const [key] = node.textContent.split(" ");
    const [source = "", target = ""] = key.split(":");
    return {
      source,
      target,
      type: node.tagName,
      textContent: node.textContent.split(key).join(""),
      props,
    };
  });
}
