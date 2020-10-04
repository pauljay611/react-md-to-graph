import React, { useState, useCallback } from "react";
import AceEditor from "react-ace";

import { Wrapper } from "../components/Common";
import { useGlobalState } from "../providers";
import { ActionType } from "../types";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-monokai";
// code snippets
import "ace-builds/src-noconflict/ext-language_tools";

const Editor: React.FC = () => {
  const { state, dispatch } = useGlobalState();

  const onChange = useCallback(
    (newValue) => {
      dispatch({ type: ActionType.SetRawText, payload: { value: newValue } });
    },
    [dispatch]
  );

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
        value={state.rawText}
        defaultValue={state.rawText}
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
