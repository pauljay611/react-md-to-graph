export interface Node {
  tag: string;
  content: Element[];
  target: string[];
}

export function Parser(
  raw: string,
  splitTag: string,
  nodeTags: string[]
): Node[] {
  const parser = new DOMParser();
  const domTree = parser.parseFromString(raw, "text/html").querySelector("body")
    .children;
  const stack: Element[] = [];
  const allNodes: Element[][] = [];
  // 篩掉分割節點 tag
  Array.from(domTree).forEach((item) => {
    if (item.tagName === splitTag) {
      allNodes.push([...stack]);
      stack.length = 0;
      return;
    }
    stack.push(item);
  });
  // 防止最後沒包在裡面的 tag
  allNodes.push([...stack]);
  // 分割成 tag, content, target
  return allNodes.map((node) => {
    const template: Node = {
      tag: "",
      content: [],
      target: [],
    };
    template.tag =
      node.find((n) => nodeTags.includes(n.tagName))?.textContent ?? "";
    template.content = node.filter(
      (n) => !nodeTags.includes(n.tagName) && n.tagName !== "UL"
    );
    template.target = Array.from(
      node.find((n) => n.tagName === "UL").children
    ).map((c) => c.textContent);
    return template;
  });
}
