import React, { useCallback, useState } from "react";
import styld from "styled-components";

import Header from "./components/Header";
import Modal from "./components/Modal";

import Editor from "./containers/Editor";
import Graph from "./containers/Graph";

import { StateProvider } from "./providers";

const Layout = styld.div`
    position: relative;
    width: 100%;
`;

const Main = styld.div`
    display: flex;
    heigth: 100%;
`;

const title = "React md to graph";

const App: React.FC = () => {
  const [modal, setModal] = useState(false);

  const openModal = useCallback(
    (val) => {
      setModal(val);
    },
    [modal]
  );

  return (
    <Layout>
      {modal && <Modal openModal={openModal} />}
      <Header title={title} openModal={openModal}></Header>
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
