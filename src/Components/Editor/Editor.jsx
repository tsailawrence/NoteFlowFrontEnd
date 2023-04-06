import React from "react";
import ReactQuill from "react-quill";
import { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import "./Editor.scss";
import katex from "katex";
import "katex/dist/katex.min.css";
window.katex = katex;

const modules = {
  toolbar: [
    [
      {
        header: [1, 2, 3, 4, 5, 6, false],
      },
    ],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "+1" },
      { indent: "-1" },
    ],
    [{ color: [] }, { background: [] }],
    ["link", "image", "video", "formula"],
    [
      { align: "" },
      { align: "right" },
      { align: "center" },
      { align: "justify" },
    ],
    ["clean"],
  ],
  history: [{ delay: 0 }],
};

const Editor = () => {
  const [value, setValue] = useState("");
  const [thumbnail, setThumbnail] = useState({});

  useEffect(() => {}, [value]);
  const nodes = document.getElementsByClassName("ql-editor")[0].childNodes;
  nodes.forEach((n) => {});
  console.log([0]?.innerText);

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      className="editor"
      modules={modules}
    />
  );
};

export default Editor;
