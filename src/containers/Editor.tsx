import React, { useState, useCallback } from "react";
import AceEditor from "react-ace";
import MarkdownIt from "markdown-it";

import { Wrapper } from "../components/Common";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-monokai";
// code snippets
import "ace-builds/src-noconflict/ext-language_tools";

const defaultValue = `# 2008 TW Momo
// write something in markdown
`;

const md = new MarkdownIt();

const Editor = () => {
  const [value, setValue] = useState(defaultValue);

  const onChange = useCallback((newValue) => {
    setValue(newValue);
    const raw = md.render(newValue);
    const parser = new DOMParser();
    const domTree = parser
      .parseFromString(raw, "text/html")
      .querySelector("body").children;
    const nodes: any = [];
    const allNodes = [];
    Array.from(domTree).forEach((item) => {
      if (item.tagName === "HR") {
        allNodes.push([...nodes]);
        nodes.length = 0;
        return;
      }
      nodes.push(item);
    });
    allNodes.push([...nodes]);
    const m = allNodes.map((node) => {
      const template = {
        tag: "",
        content: [],
        target: [],
      };
      template.tag = node.find((n) => n.tagName === "H1")?.textContent ?? "";
      template.content = node.filter(
        (n) => n.tagName !== "H1" && n.tagName !== "UL"
      );
      template.target = node
        .filter((n) => n.tagName === "UL")
        .map((ul) => Array.from(ul.children).map((c) => c.textContent));
      return template;
    });
    console.log(m);
  }, []);

  return (
    <Wrapper width="50%">
      <AceEditor
        width="100%"
        height="100vh"
        mode="markdown"
        theme="monokai"
        onChange={onChange}
        name="Editor"
        fontSize={20}
        value={value}
        defaultValue={defaultValue}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
      />
    </Wrapper>
  );
};

export default Editor;
