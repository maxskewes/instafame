import { useStyles } from './styles';
import { Box, Container } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import SideHeader from '../../components/SideHeader';
import InstaLink from '../../components/InstaLink';
import SmDisplayHead from '../../components/SmDisplayHead';

const ServiceWrapper = (props) => {
  const { children, ...rest } = props;
  const classes = useStyles();
  return (
    <Box className={classes.serviceBox}>
      <SideHeader />
      <SmDisplayHead />
      <Container>
        <InstaLink to='/services'>
          <PageTitle pageTitle='Services' />
        </InstaLink>
        {children}
      </Container>
    </Box>
  );
};

export default ServiceWrapper;
