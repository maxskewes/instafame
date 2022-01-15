import React from 'react';
import { useStyles } from './styles';
import InstaLink from '../InstaLink';
import { Box, Container, fabClasses, Grid, Typography } from '@mui/material';

const HomeBanner = () => {
  const classes = useStyles();
  return (
    <div className={classes.nav} style={{ maxWidth: '100vw', height: '150px' }}>
      <div className={classes.spaceDiv} />
      <div className={classes.linkDiv}>
        <div>
          <InstaLink to='/services'>
            <Typography variant='h3' className={classes.linkText}>
              Services
            </Typography>
          </InstaLink>
        </div>
        <div>
          <InstaLink to='/galleries'>
            <Typography variant='h3' className={classes.linkText}>
              Galleries
            </Typography>
          </InstaLink>
        </div>
      </div>
      <div
        style={{
          width: '200px',
          height: '150px',
          paddingRight: 20,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography
          style={{
            textAlign: 'right',
            alignContent: 'center',
          }}
        >
          INSTA-FAME Studios <br />
          ccb#179140 <br />
          BEN LUND <br />
          503 484-3855 <br />
          instafamestudios@gmail.com
        </Typography>
      </div>
    </div>
  );
};

export default HomeBanner;
