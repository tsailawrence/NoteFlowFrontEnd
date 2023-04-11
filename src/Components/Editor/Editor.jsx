import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./Editor.scss";
import { IoIosArrowBack } from "react-icons/io";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useFlowStorage } from "../../storage/Storage";
import katex from "katex";
import "katex/dist/katex.min.css";
window.katex = katex;

export const Editor = ({ saveNodeLabel, handleDrawerClose, flowID, nodes, nodeID }) => {
  const saveNode = useFlowStorage((state) => state.saveNode);
  /* */
  // const flowID = "user1_1";
  // const nodeID = "1";
  const flows = useFlowStorage((state) => state.flows);
  const filtered_flow = flows.filter((f) => f.id === flowID)[0];

  const filtered_node = nodes.filter((n) => n.id === nodeID)[0];
  const flowNodes = useFlowStorage((state) => state.flowNodes);
  const filtered_value_flow = flowNodes.filter((f) => f.id === flowID).length !=0 ?flowNodes.filter((f) => f.id === flowID)[0]:{id:flowID, nodes:[{id:nodeID, value:""}]};
  console.log(flowNodes)
  console.log(filtered_value_flow)
  console.log(filtered_value_flow.nodes)
  const filtered_value = filtered_value_flow.nodes.filter((n) => n.id === nodeID).length !=0 ?filtered_value_flow.nodes.filter((n) => n.id === nodeID)[0]:{id: nodeID,value:""};

  const [state, setState] = useState({
    title: filtered_node.data.label,
    value: filtered_value.value,
  });

  const handleChange = (value) => {
    console.log(state.value)
    setState({ ...state, value });
  };

  const onSave = () => {
    console.log(state.value);
    saveNode({
      flow_id: flowID,
      node_id: nodeID,
      title: state.title,
      value: state.value,
    });

    //connect to backend
  };

  return (
    <div className="editor">
      <div className="header">
        <IconButton
          size="large"
          onClick={() => {
            handleDrawerClose();
            onSave();
          }}
        >
          <IoIosArrowBack size={20} />
        </IconButton>
        <input
          className="title-input"
          type="text"
          placeholder="Untitled..."
          value={state.title}
          onChange={(e) => {
            setState({ ...state, title: e.target.value });
            saveNodeLabel(nodeID, e.target.value);
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
