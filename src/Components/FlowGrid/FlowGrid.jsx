import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useFlowStorage } from "../../storage/Storage";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FlowGrid() {
  const flows = useFlowStorage((state) => state.flows);
  console.log(flows)
  return (
    <Box sx={{  flexGrow: 1, width: 1000}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {flows.map((flow) => (
          <Grid xs={2} sm={4} md={4}>
            <CardContent>
              <Button sx={{width: 300 , height:200,ml:20, p: 2, border: 1 }}></Button>
              <Typography >{flow.name}</Typography>
            </CardContent>
            {/* <MiniFlow flow={flow}/> */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}