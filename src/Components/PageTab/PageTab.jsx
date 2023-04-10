import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

import IconButton from '@mui/material/IconButton';
import { FaHome } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { Navigate } from "react-router-dom";

export default function PageTab({addNewFlow, openTabList}) {

  // const [tabList, setTabList] = useState(openTabList);
  const [tabList, setTabList] = useState([{title:'AI'}, {title:'BI'}]);
  const [isHome, setIsHome] = useState(false);
  // const navigate = useNavigate();
  

  const backToHome = () => {
    // navigate('/home');
    setIsHome(true);
  }

  // const addNewFlow = () => {

  // }
  const TabButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[100]),
    backgroundColor: grey[900],
    '&:hover': {
      backgroundColor: grey[800],
    },
    width: 150,
    ml: 50
  }));

  return (
    <>
    {isHome && <Navigate to ="/home"/>}
    <Stack sx={{ backgroundColor:"black", height:"50px"}} direction="row" spacing={2}>
      <IconButton size="large" onClick = {backToHome}>
        <FaHome color="white" size = {20}/>
      </IconButton>
      <ButtonGroup>
      {tabList.map((tab)=>(
        <TabButton variant="contained"> {tab.title}
          <IconButton size="large" onClick = {backToHome}>
            <RxCross2 color="white" size = {20}/>
          </IconButton>
        </TabButton>
      // <Chip
      //   label={tab.title}
      //   // variant="outlined"
      //   // onClick={handleClick}
      //   // onDelete={handleDelete}
      // />

      ))}            
      </ButtonGroup>
      <IconButton size="large" onClick = {addNewFlow}>
        <FaPlus color="white" size = {20}/>
      </IconButton>
    </Stack>
    </>

  );
}