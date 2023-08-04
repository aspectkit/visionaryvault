import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import '../../components/Wrapper/Wrapper.css';

const theme = createTheme();

const Item = (props) => (
  <Paper
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }}
    {...props}
  />
);

export default function FullWidthGrid() {
  return (
    <ThemeProvider theme={theme}>
      <Box className='wrapper'  sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={6} md={8}>
            <Item>xs=6 md=8</Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={6} md={8}>
            <Item>xs=6 md=8</Item>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}