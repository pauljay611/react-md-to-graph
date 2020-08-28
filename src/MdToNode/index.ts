import { getTextNode } from './parser'

export default class MdToNode {
    constructor(private mdText: string) {
        this.mdText = mdText
    }

    compileToNode() {
        return getTextNode(this.mdText, "H1")
    }
}