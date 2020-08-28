import { Node, NodeProps } from '../types'

/**
 * get markdown raw text to Node object
 * @param {string} raw - markdown raw text
 * @param {string} nodeTags - tags for markdown html tag 
 */

export function getTextNode<T>(
    raw: string,
    nodeTag: string,
    props: NodeProps<T>
): Node<T>[] {
    const parser = new DOMParser();
    const domTree = parser.parseFromString(raw, "text/html").querySelector("body");

    const allNodes = [...domTree.querySelectorAll(nodeTag)].map(node => ({ type: node.tagName, textContent: node.textContent, props }))

    return allNodes
}