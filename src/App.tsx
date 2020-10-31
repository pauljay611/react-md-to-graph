import React, { useCallback, useEffect, useState } from "react";
import styld from "styled-components";
import { Transition } from "react-transition-group";

import Header from "./components/Header";
import Modal from "./components/Modal";

import Editor from "./containers/Editor";
import Graph from "./containers/Graph";

import { StateProvider } from "./providers";

const duration = 300;

const defaultStyle = {
  transition: `all ${duration}ms`,
};

const transitionStyles = {
  entering: { left: "1000px", opacity: 0 },
  entered: { left: "200px", opacity: 1 },
  exiting: { left: "-10px", opacity: 0 },
  exited: { left: "1000px", display: "none" },
  unmounted: {
    left: "100px",
  },
};

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
  const [inProp, setInProp] = useState(true);
  const [number, setNumber] = useState(0);

  const openModal = useCallback(
    (val) => {
      setModal(val);
    },
    [modal]
  );

  useEffect(() => {
    if (inProp) return;
    setTimeout(() => {
      setNumber((prev) => prev + 1);
      setInProp(true);
    }, 1000);
  }, [inProp]);

  const handleTrans = () => {
    setInProp(false);
  };

  return (
    <StateProvider>
      <Layout>
        <button onClick={handleTrans}>Click to Enter</button>
        <Transition in={inProp} timeout={500}>
          {(state) => (
            <div
              style={{
                position: "absolute",
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              {number}
            </div>
          )}
        </Transition>
        {modal && <Modal openModal={openModal} />}
        <Header title={title} openModal={openModal}></Header>
        <Main>
          <Editor></Editor>
          <Graph></Graph>
        </Main>
      </Layout>
    </StateProvider>
  );
};

export default App;
