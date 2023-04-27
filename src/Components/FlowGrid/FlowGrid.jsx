import React, { useEffect, useState } from "react";
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
import instance from "../../API/api";
import { useApp } from "../../hooks/useApp";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export default function FlowGrid() {
  // const flows = useFlowStorage((state) => state.flows);
  // const user = await localStorage.getItem("user");
  const { user } = useApp();
  const [flows, setFlows] = useState([]);
  const [loading, setLoading] = useState(true);
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
    width: 300,
    height: 200,
  }));

  useEffect(() => {
    if (!user) return;
    instance
      .post("/flows", { user })
      .then((res) => {
        if (res.status === 200) setFlows(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  }, [user]);

  const toFlow = (flow) => {
    console.log("flow:", flow);
    if (!tabList.find((f) => f.id == flow.id)) {
      addTab({
        id: flow.id,
        title: flow.name ? flow.name : "Undefined",
      });
    }
    changeFlowNow(flow);
    navigate(`/flow?id=${flow.id}`);
  };

  if (loading) return <LoadingScreen />;
  return (
    <Grid container justifyContent="left" sx={{ pl: 2, pt: 2 }} spacing={2}>
      {flows.map((flow, key) => (
        <Grid item key={key}>
          <FlowButton onClick={() => toFlow(flow)}>
            Last Edit Time: {flow.time} hours
          </FlowButton>
          <Typography>{flow.name}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}
