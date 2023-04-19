import React, { useEffect, useState } from "react";
import "./SideBar.scss";
import { FaPen, FaBook, FaCalendarAlt } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useFlowStorage } from "../../storage/Storage";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const changeMode = useFlowStorage((state) => state.changeMode);
  const mode = useFlowStorage((state) => state.mode);
  const tabList = useFlowStorage((state) => state.tabList);
  const location = useLocation();
  const SideBarItem = styled(Box)(({ theme }) => ({
    cursor: "pointer",
    color: "white",
    backgroundColor: "black",
    border: "1px black solid",
    width: "100%",
    paddingTop: "3vmin",
    paddingBottom: "3vmin",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  }));
  // 按鈕顏色互斥
  const setColor = () => {
    const all = document.querySelectorAll(".sidebar-item");
    for (let index = 0; index < all.length; index++) {
      if (index === mode) {
        all[index].style.backgroundColor = "white";
        all[index].style.color = "black";
      } else {
        all[index].style.backgroundColor = "black";
        all[index].style.color = "white";
      }
    }
  };
  useEffect(() => {
    setColor();
  }, [mode, tabList, location]);
  return (
    <Stack className="sidebar">
      <div className="logo">
        <img src="/src/assets/logo.png" alt="" width="60" height="60" />
      </div>
      <SideBarItem className="sidebar-item" onClick={() => changeMode(0)}>
        {mode === 0 ? (
          <FaPen color="black" size={20} style={{ width: "45%" }} />
        ) : (
          <FaPen color="white" size={20} style={{ width: "45%" }} />
        )}
        <Typography style={{ width: "55%" }}>Flows</Typography>
      </SideBarItem>
      <SideBarItem className="sidebar-item" onClick={() => changeMode(1)}>
        {mode === 1 ? (
          <FaBook color="black" size={20} style={{ width: "45%" }} />
        ) : (
          <FaBook color="white" size={20} style={{ width: "45%" }} />
        )}
        <Typography style={{ width: "55%" }}>Library</Typography>
      </SideBarItem>
      <SideBarItem className="sidebar-item" onClick={() => changeMode(2)}>
        {mode === 2 ? (
          <FaCalendarAlt color="black" size={20} style={{ width: "45%" }} />
        ) : (
          <FaCalendarAlt color="white" size={20} style={{ width: "45%" }} />
        )}
        <Typography style={{ width: "55%" }}>Calendar</Typography>
      </SideBarItem>
      <SideBarItem className="sidebar-item" onClick={() => changeMode(3)}>
        {mode === 3 ? (
          <AiTwotoneSetting color="black" size={20} style={{ width: "45%" }} />
        ) : (
          <AiTwotoneSetting color="white" size={20} style={{ width: "45%" }} />
        )}
        <Typography style={{ width: "55%" }}>Settings</Typography>
      </SideBarItem>
    </Stack>
  );
};

export default Sidebar;
