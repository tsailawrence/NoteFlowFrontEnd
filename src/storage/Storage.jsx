import {create} from "zustand";
import produce from "immer";
import userFlows from "./data";

const flows = userFlows;
export const useFlowStorage = create((set) => ({
  flows: flows,
  saveFlow: (payload) =>
    set(
      produce((state) => {    
        for(let ele in state.flows){
          if(payload.id == state.flows[ele].id){
            state.flows[ele].edges = payload.flow.edges;
            state.flows[ele].viewport = payload.flow.viewport;
            state.flows[ele].nodes = payload.flow.nodes;
            state.flows[ele].nextNodeId = payload.nextNodeId;
            state.flows[ele].name = payload.title;
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


