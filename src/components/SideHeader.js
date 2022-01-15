import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import InstaLink from '../components/InstaLink';

const WHITE = '#EFEFEF';
const BLACK = '#1C1C1C';

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: BLACK,
    color: WHITE,
    textAlign: 'center',
    height: 'full',
    maxWidth: '150px',
    margin: '20px 0',
    padding: '20px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  item: {
    paddingTop: 10,
  },
}));

export default function SideHeader() {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <InstaLink to={`/`}>
        <Box width='100%'>
          <img
            src='/images/layoutlogo1.jpg'
            alt='logo'
            style={{ width: '100%' }}
          />
        </Box>
      </InstaLink>
      <Box className={classes.item}>
        <Typography>Insta-Fame Studios</Typography>
      </Box>
      <Box className={classes.item}>
        <Typography>CCB#179140</Typography>
      </Box>
      <Box className={classes.item}>
        <Typography>Ben Lund</Typography>
      </Box>
      <Box className={classes.item}>
        <Typography>
          1819 SE Torbank Rd.
          <br />
          Milwaukie, OR 97222
        </Typography>
      </Box>
      <Box className={classes.item}>
        <Typography>(503) 484-3855</Typography>
      </Box>
      <Box className={classes.item}>
        <Typography>
          instafamestudios
          <br />
          @gmail.com
        </Typography>
      </Box>
      <Box display='flex' flexDirection='column' padding='30px 0'>
        <InstaLink to='/'>
          <h3>Home</h3>
        </InstaLink>
        <br />
        <InstaLink to='/galleries'>
          <h3>Galleries</h3>
        </InstaLink>
        <br />
        <InstaLink to='/services'>
          <h3>Services</h3>
        </InstaLink>
      </Box>
    </Box>
  );
}
