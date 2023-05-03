import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdLanguage } from 'react-icons/md';
import { styled } from '@mui/material/styles';
const Settings = () => {
  const SettingsButton = styled(Box)(({ theme }) => ({
    cursor: 'pointer',
    color: 'black',
    backgroundColor: 'white',
    width: '100%',
    paddingTop: '3vmin',
    paddingBottom: '3vmin',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    ':hover': {
      backgroundColor: 'lightgrey',
      border: '1px lightgrey solid',
    },
  }));
  return (
    <Grid container columns={10} sx={{ height: '100%' }}>
      <Grid item xs={9}>
        <Grid container columns={12} sx={{ height: '100%' }}>
          <Grid item xs={7}>
            <Stack
              direction='row'
              justifyContent='center'
              alignItems='center'
              sx={{ height: '100%' }}
            >
              <div
                style={{
                  width: '350px',
                  height: '350px',
                  borderRadius: '50%',
                  border: '2px solid black',
                  overflow: 'hidden',
                }}
              >
                <BsFillPersonFill
                  color='black'
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </Stack>
          </Grid>
          <Grid item xs={5}>
            <Stack
              direction='column'
              justifyContent='center'
              alignItems='left'
              sx={{ height: '100%' }}
            >
              <Typography sx={{ fontSize: '24px', marginBottom: '20px' }}>
                Lawrence Tsai
              </Typography>
              <Typography sx={{ marginBottom: '10px' }}>
                Email: lawrence@gmail.com
              </Typography>
              <Stack direction='row' justifyContent='left' alignItems='center'>
                <Typography sx={{ marginRight: '5px' }}>Password:</Typography>
                <Button
                  variant='outlined'
                  sx={{ backgroundColor: '#0e1111', color: 'white' }}
                >
                  Reset Password
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} sx={{ borderLeft: '1px solid grey' }}>
        <Stack direction='column' justifyContent='center' alignItems='left'>
          <SettingsButton>
            <BsFillPersonFill
              color='black'
              size={28}
              style={{ width: '35%' }}
            />
            <Typography style={{ width: '65%' }}>Profile</Typography>
          </SettingsButton>
          <SettingsButton>
            <MdLanguage color='black' size={28} style={{ width: '35%' }} />
            <Typography style={{ width: '65%' }}>Language</Typography>
          </SettingsButton>
        </Stack>
      </Grid>
    </Grid>
  );
};
export default Settings;
