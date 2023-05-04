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
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();
  const changeMode = useFlowStorage((state) => state.changeMode);
  const mode = useFlowStorage((state) => state.mode);
  const tabList = useFlowStorage((state) => state.tabList);
  const location = useLocation();
  const SideBarItem = styled(Box)(({ theme }) => ({
    cursor: "pointer",
    color: "white",
    backgroundColor: "black",
    borderRight: "1px black solid",
    borderLeft: "1px black solid",
    width: "100%",
    paddingTop: "20px",
    paddingBottom: "20px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  }));
  const SideBarText = styled(Typography)(() => ({
    fontSize: "1.2vw",
    width: "55%",
  }));
  useEffect(() => {
    const all = document.querySelectorAll(".sidebar-item");
    for (let index = 0; index < all.length; index++) {
      // 按鈕顏色互斥
      if (index === mode) {
        all[index].style.backgroundColor = "white";
        all[index].style.color = "black";
        all[index].firstChild.style.color = "black";
      } else {
        all[index].style.backgroundColor = "black";
        all[index].style.color = "white";
        all[index].firstChild.style.color = "white";
      }
    }
  }, [mode, tabList, location, t]);
  return (
    <Stack className="sidebar">
      <div className="logo">
        <img src="/src/assets/logo.png" alt="" />
      </div>
      <SideBarItem className="sidebar-item" onClick={() => changeMode(0)}>
        <FaPen size={20} style={{ width: "45%" }} />
        <SideBarText>{t("Flows")}</SideBarText>
      </SideBarItem>
      <SideBarItem className="sidebar-item" onClick={() => changeMode(1)}>
        <FaBook size={20} style={{ width: "45%" }} />
        <SideBarText>{t("Favorite")}</SideBarText>
      </SideBarItem>
      <SideBarItem className="sidebar-item" onClick={() => changeMode(2)}>
        <FaCalendarAlt size={20} style={{ width: "45%" }} />
        <SideBarText>{t("Calendar")}</SideBarText>
      </SideBarItem>
      <SideBarItem className="sidebar-item" onClick={() => changeMode(3)}>
        <AiTwotoneSetting size={20} style={{ width: "45%" }} />
        <SideBarText>{t("Settings")}</SideBarText>
      </SideBarItem>
    </Stack>
  );
};

export default Sidebar;
