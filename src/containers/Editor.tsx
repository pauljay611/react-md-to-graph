import React, { useState, useCallback } from "react";
import AceEditor from "react-ace";

import { Wrapper } from "../components/Common";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-monokai";
// code snippets
import "ace-builds/src-noconflict/ext-language_tools";

const defaultValue = `# 2008 TW Momo
// write something in markdown
`;

const Editor = () => {
  const [value, setValue] = useState(defaultValue);

  const onChange = useCallback((newValue) => {
    setValue(newValue);
  }, []);

  return (
    <Wrapper>
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
