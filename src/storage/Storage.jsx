import { create } from "zustand";
import produce from "immer";
import userFlows from "./data";

const flows = userFlows;
export const useFlowStorage = create((set) => ({
  flows: flows,
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
        for (let ele in state.flows) {
          if (payload.user_id === state.flows[ele].id) {
            if (payload.node_id === state.flows[ele].nodes.id) {
              state.flows[ele].nodes.data.label = payload.title;
              state.flows[ele].nodes.data.value = payload.value;
            }
          }
        }
      })
    ),
}));
