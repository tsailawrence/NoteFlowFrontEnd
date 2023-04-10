import { create } from "zustand";
import produce from "immer";
import { userFlows, userFlowNode } from "./data";

const flows = userFlows;
export const useFlowStorage = create((set) => ({
  flows: flows,
  flowNodes: userFlowNode,

  saveFlow: (payload) =>
    set(
      produce((state) => {
        for (let ele in state.flows) {
          if (payload.id == state.flows[ele].id) {
            state.flows[ele].edges = payload.flow.edges;
            state.flows[ele].viewport = payload.flow.viewport;
            state.flows[ele].nodes = payload.flow.nodes;
            state.flows[ele].nextNodeId = payload.nextNodeId;
            state.flows[ele].name = payload.title;
          }
        }
      })
    ),
  saveNode: (payload) =>
    set(
      produce((state) => {
        for (let ele in state.flowNodes) {
          if (payload.flow_id === state.flowNodes[ele].id) {
            for (let el in state.flowNodes[ele].nodes) {
              if (payload.node_id === state.flowNodes[ele].nodes[el].id) {
                state.flows[ele].nodes[el].data.label = payload.title;
                state.flowNodes[ele].nodes[el].value = payload.value;
              }
            }
          }
        }
      })
    ),
  addFlow: (payload) =>
  set(
    produce((state) => {    
      state.flows.unshift(payload);
      // for(let ele in state.flows){
      //   if(payload.id == state.flows[ele].id){
      //     state.flows[ele].edges = payload.flow.edges;
      //     state.flows[ele].viewport = payload.flow.viewport;
      //     state.flows[ele].nodes = payload.flow.nodes;
      //     state.flows[ele].nextNodeId = payload.nextNodeId;
      //     state.flows[ele].name = payload.title;
      //   }
      // }
    })
  ),
}));
