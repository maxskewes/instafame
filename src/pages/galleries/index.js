import { useStyles } from './styles';
import { Box, Grid, Typography } from '@mui/material';
import GalleryWrapper from './GalleryWrapper';
import PageItem from '../../components/PageItem';
import BeforeAfter from '../../components/BeforeAfter';

const Galleries = () => {
  const classes = useStyles();
  return (
    <GalleryWrapper>
      <Grid container spacing={2}>
        <PageItem itemTitle='Daniels Job' to='/galleries/daniels-job'>
          <BeforeAfter
            beforeTitle='Daniels Before'
            afterTitle='Daniels After'
            beforePic='/images/daniels72dpi/1.jpg'
            afterPic='/images/daniels72dpi/44.jpg'
          />
        </PageItem>
        <PageItem itemTitle='32nd Place' to='/galleries/32nd-place'>
          <BeforeAfter
            beforeTitle='32nd Before'
            afterTitle='32nd After'
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
    </GalleryWrapper>
  );
};

export default Galleries;
