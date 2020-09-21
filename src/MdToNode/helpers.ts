import { Node, NodeProps, EdgeProps, Edge } from '../types'

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

    const allNodes = [...domTree.querySelectorAll(nodeTag)].map(node => {
        const [id = ''] = node.textContent.split(" ")
        return { id, type: node.tagName, textContent: node.textContent.split(id).join(""), props }
    })

    return allNodes
}

export function getTextEdge<T>(
    raw: string,
    nodeTag: string,
    props: EdgeProps<T>
): Edge<T>[] {
    const parser = new DOMParser();
    const domTree = parser.parseFromString(raw, "text/html").querySelector("body");

    const allNodes = [...domTree.querySelectorAll(nodeTag)].map(node => {
        const [key] = node.textContent.split(" ")
        const [source = '', target = ''] = key.split(":")
        return { source, target, type: node.tagName, textContent: node.textContent.split(key).join(""), props }
    })

    return allNodes
}