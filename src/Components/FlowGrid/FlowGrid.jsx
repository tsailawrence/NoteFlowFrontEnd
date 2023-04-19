import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PageTab from "../PageTab/PageTab";
import { useFlowStorage } from "../../storage/Storage";
import { useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

export default function FlowGrid() {
  const flows = useFlowStorage((state) => state.flows);
  const tabList = useFlowStorage((state) => state.tabList);
  const addTab = useFlowStorage((state) => state.addTab);
  const navigate = useNavigate();
  const changeFlowNow = useFlowStorage((state) => state.changeFlowNow);
  const FlowButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[100]),
    backgroundColor: "white",
    border: "1px black solid",
    "&:hover": {
      backgroundColor: grey[100],
      border: "1px grey solid",
    },
    width: "100%",
    height: 200,
  }));

  const toFlow = (flow) => {
    console.log(flow);
    if (!tabList.find((f) => f.id == flow.id)) {
      addTab({ id: flow.id, title: flow.name });
    }
    changeFlowNow(flow);
    navigate("/flow", { state: flow });
  };

  return (
    <Grid
      container
      justifyContent="left"
      sx={{ p: 2 }}
      spacing={2}
      columns={16}
    >
      {flows.map((flow) => (
        <Grid item xs={4} md={4}>
          <FlowButton onClick={() => toFlow(flow)}>
            Last Edit Time: {flow.time} hours
          </FlowButton>
          <Typography>{flow.name}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}
