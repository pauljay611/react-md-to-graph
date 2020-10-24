import React, { useCallback, useEffect, useRef, useState } from "react";
import styld from "styled-components";

import Header from "./components/Header";
import Modal from "./components/Modal";

import Editor from "./containers/Editor";
import Graph from "./containers/Graph";

import { StateProvider } from "./providers";

type SvgInHtml = HTMLElement & SVGGraphicsElement;

const Layout = styld.div`
    position: relative;
    width: 100%;
`;

const Main = styld.div`
    display: flex;
    heigth: 100%;
`;

const title = "React md to graph";

var download = function (href: string, name: string) {
  var link = document.createElement("a");
  link.download = name;
  link.href = href;
  link.click();
};

const App: React.FC = () => {
  const [modal, setModal] = useState(false);
  const imgRef = useRef(null);
  const canvasRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    // https://stackoverflow.com/questions/3768565/drawing-an-svg-file-on-a-html5-canvas
    // https://levelup.gitconnected.com/draw-an-svg-to-canvas-and-download-it-as-image-in-javascript-f7f7713cf81f
    const svg: SvgInHtml = document.querySelector(".graph");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgRef.current = svg;
    if (!svg) return;

    const blob = new Blob([svg.outerHTML], {
      type: "image/svg+xml;charset=utf-8",
    });

    const URL = window.URL || window.webkitURL;
    const blobURL = URL.createObjectURL(blob);
    const img = new Image();
    imgRef.current = img;
    imgRef.current.src = blobURL;
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = 1000;
    canvas.height = 1000;
    canvasRef.current = canvas;
  }, [svgRef.current]);

  const openModal = useCallback(
    (val) => {
      setModal(val);
    },
    [modal]
  );

  const saveGraph = useCallback(() => {
    if (!canvasRef.current || !imgRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    console.log(imgRef.current);
    ctx.drawImage(imgRef.current, 100, 100, 500, 500);
    download(canvasRef.current.toDataURL("image/png"), "image.png");
  }, [canvasRef.current, imgRef.current]);

  return (
    <StateProvider>
      <Layout>
        {modal && <Modal openModal={openModal} />}
        <Header
          saveGraph={saveGraph}
          title={title}
          openModal={openModal}
        ></Header>
        <Main>
          <Editor></Editor>
          <Graph></Graph>
        </Main>
      </Layout>
    </StateProvider>
  );
};

export default App;
