import { create } from "zustand";
import produce from "immer";
import { userFlows, userFlowNode } from "./data";

const flows = userFlows;
const tabList = [];
export const useFlowStorage = create((set) => ({
  flows: flows,
  tabList: tabList,
  flowNow: {},
  flowNodes: userFlowNode,
  changeFlowNow: (payload) =>
    set(
      produce((state) => {
        state.flowNow = payload;
      })
    ),
  addTab: (payload) => {
    console.log("addtab:", payload);
    set(
      produce((state) => {
        state.tabList.push(payload);
      })
    );
  },
  closeTab: (payload) =>
    set(
      produce((state) => {
        state.tabList.pop(payload);
      })
    ),

  saveNewNode: (payload) =>
    set(
      produce((state) => {
        for (let ele in state.flows) {
          if (payload.id == state.flows[ele].id) {
            state.flows[ele].nodes = payload.flow.nodes;
          }
        }
      })
    ),
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
        let findNode = false;
        let findFlow = false;
        for (let ele in state.flowNodes) {
          if (payload.flow_id === state.flowNodes[ele].id) {
            findFlow = true;
            for (let el in state.flowNodes[ele].nodes) {
              if (payload.node_id === state.flowNodes[ele].nodes[el].id) {
                findNode = true;
                console.log(payload.title);
                // state.flows[ele].nodes[el].data.label = payload.title;
                state.flowNodes[ele].nodes[el].value = payload.value;
              }
            }
            if (!findNode) {
              state.flowNodes[ele].nodes.push({
                id: payload.node_id,
                value: payload.value,
              });
            }
          }
        }
        if (!findFlow) {
          state.flows.push({
            id: payload.flow_id,
            nodes: [{ id: payload.node_id, data: { label: payload.title } }],
          });
          state.flowNodes.push({
            id: payload.flow_id,
            nodes: [{ id: payload.node_id, value: payload.value }],
          });
        }
      })
    ),
  addFlow: (payload) =>
    set(
      produce((state) => {
        state.flows.unshift(payload);
      })
    ),
}));
