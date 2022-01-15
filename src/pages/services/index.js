import { useStyles } from './styles';
import { Box, Container, Grid } from '@mui/material';
import ServiceWrapper from './ServiceWrapper';
import PageItem from '../../components/PageItem';
import BeforeAfter from '../../components/BeforeAfter';

const Services = () => {
  const classes = useStyles();
  return (
    <ServiceWrapper>
      <Grid container spacing={2}>
        <PageItem itemTitle='Metal Work' to='/services/metalwork'>
          <BeforeAfter
            beforeTitle='Metal Before'
            afterTitle='Metal After'
            beforePic='/images/daniels72dpi/1.jpg'
            afterPic='/images/daniels72dpi/44.jpg'
          />
        </PageItem>
        <PageItem itemTitle='Tile Work' to='/services/tilework'>
          <BeforeAfter
            beforeTitle='Tile Before'
            afterTitle='Tile After'
            beforePic='/images/32nd-place-job/IMG_0024.jpg'
            afterPic='/images/32nd-place-job/IMG_0054.jpg'
          />
        </PageItem>
        <PageItem>
          <BeforeAfter />
        </PageItem>
        <PageItem>
          <BeforeAfter />
        </PageItem>
        <PageItem>
          <BeforeAfter />
        </PageItem>
        <PageItem>
          <BeforeAfter />
        </PageItem>
        <PageItem>
          <BeforeAfter />
        </PageItem>
        <PageItem>
          <BeforeAfter />
        </PageItem>
      </Grid>
    </ServiceWrapper>
  );
};

export default Services;
