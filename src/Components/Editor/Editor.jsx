import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./Editor.scss";
import { IoIosArrowBack } from "react-icons/io";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

export const Editor = ({ handleDrawerClose }) => {
  const [state, setState] = useState({ value: null });
  const handleChange = (value) => {
    setState({ ...state, value });
  };

  console.log(state.value);

  return (
    <div className="editor">
      <div className="header">
        <IconButton size="large" onClick={() => handleDrawerClose()}>
          <IoIosArrowBack size={20} />
        </IconButton>
        <input
          className="title-input"
          type="text"
          placeholder="Untitled..."
          onChange={(e) => {
            setState({ ...state, title: e.target.value });
          }}
        ></input>
        <span className="focus-border"></span>
        {/* 需限制 user 數量 */}
        <div className="users">
          <div className="user" style={{ backgroundColor: "black" }}>
            R
          </div>
          <div className="user" style={{ backgroundColor: "blue" }}>
            J
          </div>
          <div className="user" style={{ backgroundColor: "purple" }}>
            L
          </div>
        </div>
      </div>
      <div className="text-editor">
        <EditorToolbar />
        <ReactQuill
          theme="snow"
          value={state.value}
          onChange={handleChange}
          placeholder={"Write something awesome..."}
          modules={modules}
          formats={formats}
          className="editor-input"
        />
      </div>
    </div>
  );
};

export default Editor;
