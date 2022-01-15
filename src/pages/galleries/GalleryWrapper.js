import { useStyles } from './styles';
import { Box, Container } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import SideHeader from '../../components/SideHeader';
import InstaLink from '../../components/InstaLink';
import SmDisplayHead from '../../components/SmDisplayHead';

const GalleryWrapper = (props) => {
  const { children, ...rest } = props;
  const classes = useStyles();
  return (
    <Box className={classes.pageBox}>
      <SideHeader />
      <SmDisplayHead />
      <Container>
        <InstaLink to ='/galleries'>
          <PageTitle pageTitle='Galleries' />
        </InstaLink>
        {children}
      </Container>
    </Box>
  );
};

export default GalleryWrapper;
