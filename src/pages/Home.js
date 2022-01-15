import React from 'react';
import { useStyles } from './styles';
import HomeBanner from '../components/HomeBanner/index';
import BeforeAfter from '../components/BeforeAfter';
import { Box, Grid, Typography } from '@mui/material';

const WHITE = '#EFEFEF';

const beforePic = '/images/house-before.jpg';
const afterPic = '/images/house-after.jpg';
const beforeTitle = 'Before Ben Lund';
const afterTitle = 'After Ben Lund';

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.homeBox}>
      <HomeBanner />
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs={12}>
          <BeforeAfter
            beforePic={beforePic}
            afterPic={afterPic}
            beforeTitle={beforeTitle}
            afterTitle={afterTitle}
            color={WHITE}
          />
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <Typography
            align='justify'
            paragraph='true'
            whiteSpace='pre-line'
            style={{ textIndent: '20px' }}
          >
            {'\t'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Integer eget aliquet nibh praesent. Arcu cursus euismod quis viverra
            nibh cras pulvinar mattis. Vitae congue mauris rhoncus aenean vel
            elit scelerisque mauris. Curabitur vitae nunc sed velit. Pretium
            quam vulputate dignissim suspendisse in est ante in. Risus viverra
            adipiscing at in. Enim eu turpis egestas pretium aenean pharetra
            magna ac. Ut venenatis tellus in metus vulputate eu scelerisque
            felis imperdiet. Urna nec tincidunt praesent semper feugiat nibh.
            Faucibus a pellentesque sit amet porttitor eget dolor morbi. In
            ornare quam viverra orci sagittis eu volutpat odio. Ac odio tempor
            orci dapibus ultrices in iaculis nunc sed. Massa massa ultricies mi
            quis hendrerit. Tristique senectus et netus et malesuada fames.
            Tortor pretium viverra suspendisse potenti nullam ac. Viverra
            accumsan in nisl nisi scelerisque eu ultrices. Eu turpis egestas
            pretium aenean pharetra magna.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
