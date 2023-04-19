import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { Paper, Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Navigate, useNavigate } from "react-router-dom";
import { useFlowStorage } from "../../storage/Storage";
import CloseIcon from "@mui/icons-material/Close";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[700],
    },
  },
});
export default function PageTab() {
  // const flowNow = useFlowStorage((state) => state.flowNow);
  // const changeFlowNow = useFlowStorage((state) => state.changeFlowNow);
  const flows = useFlowStorage((state) => state.flows);
  const nodes = useFlowStorage((state) => state.nodes);
  const tabList = useFlowStorage((state) => state.tabList);
  const addFlow = useFlowStorage((state) => state.addFlow);
  const addTab = useFlowStorage((state) => state.addTab);
  const closeTab = useFlowStorage((state) => state.closeTab);
  // const [flowNow, setFlowNow] = useState
  const navigate = useNavigate();

  const TabButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[100]),
    backgroundColor: grey[700],
    border: "0px",
    borderColor: grey[700],
    "&:hover": {
      backgroundColor: grey[600],
      border: "0px",
    },
    width: 100,
    height: 40,
  }));

  const CloseButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[100]),
    backgroundColor: grey[700],
    border: "0px",
    "&:hover": {
      backgroundColor: grey[600],
      border: "0px",
    },
    width: 40,
    height: 40,
  }));
  const backToHome = () => {
    navigate("/home");
  };

  const toThatTab = (payload) => {
    const flow = flows.find((f) => f.id == payload.id);
    if (flow !== undefined) {
      navigate("/flow", { state: flow });
    } else {
      const node = nodes.find((f) => f.id == payload.id);
      navigate("/node", { state: node });
    }
  };

  const clickCloseTab = (payload) => {
    console.log(payload);
    closeTab(payload);
    navigate("/home");
  };

  const addNewFlow = () => {
    const payload = {
      id: "user1_" + Math.floor(Math.random() * 10000),
      name: "Untitle",
      nextNodeId: 1,
      nodes: [],
      edges: [],
    };
    addFlow(payload);
    addTab({ id: payload.id, title: payload.name });
    navigate("/flow", { state: payload });
  };

  return (
    <>
      {/* {changeTab && <Navigate to="/flow" state={{ flowNow }}/>} */}
      <Toolbar
        sx={{ backgroundColor: "black", paddingBottom: 0 }}
        direction="row"
        spacing={2}
      >
        <IconButton size="large" onClick={backToHome}>
          <FaHome color="white" size={20} />
        </IconButton>
        <Stack direction="row" spacing={1}>
          {tabList.map((tab) => {
            let tabTitle = tab.title;
            if (tabTitle.length > 7) {
              tabTitle = tabTitle.substring(0, 6) + "...";
            }

            return (
              <ButtonGroup color="primary" variant="outlined">
                <TabButton onClick={() => toThatTab(tab)}>
                  <Typography color="white">{tabTitle}</Typography>
                </TabButton>
                <CloseButton size="small" onClick={() => clickCloseTab(tab)}>
                  <RxCross2 color="white" size={20} />
                </CloseButton>
              </ButtonGroup>
            );
          })}
        </Stack>
        <IconButton size="large" onClick={addNewFlow}>
          <FaPlus color="white" size={20} />
        </IconButton>
      </Toolbar>
    </>
  );
}
