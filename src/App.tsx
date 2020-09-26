import React from "react";
import styld from "styled-components";

import Header from "./components/Header";
import Editor from "./containers/Editor";
import Graph from "./containers/Graph";

import { StateProvider } from "./providers";

const Layout = styld.div`
    width: 100vw;
    heigth: 100vh;
`;

const Main = styld.div`
    display: flex;
    width: 100%;
    heigth: 100%;
    border: 1px solid black;
`;

const App = () => {
  const title = "React md to graph";

  return (
    <Layout>
      <Header title={title}></Header>
      <Main>
        <StateProvider>
          <Editor></Editor>
          <Graph></Graph>
        </StateProvider>
      </Main>
    </Layout>
  );
};

export default App;