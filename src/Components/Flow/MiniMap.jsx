import ReactFlow, { MiniMap, ReactFlow } from "reactflow";
import "./FlowEditor.scss";

const MiniMap = ({flow}) => {

  return (
    <ReactFlow
      className="NodePanel"
      nodes={flow.nodes}
      edges={flow.edges}
    >
      <MiniMap/>
    </ReactFlow>
  );
};

export default MiniMap;

