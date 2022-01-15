import { makeStyles } from '@mui/styles';
import { Container, Grid, Typography } from '@mui/material';
import InstaLink from './InstaLink';
import crumpledBG from '../assets/graph-crumpled-bg.png';

const BLACK = '#1C1C1C';

const useStyles = makeStyles(() => ({
  gridItem: {
    backgroundImage: `url(${crumpledBG})`,
    height: '100%',
    width: 'auto',
    padding: 10,
    boxShadow: '6px 6px 10px 6px #9197b3',
  },
}));

const PageItem = (props) => {
  const { itemTitle = 'Job Title', children, to = '/' } = props;
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <InstaLink to={to}>
        <Container className={classes.gridItem}>
          <Typography
            style={{
              fontFamily: 'Tinos',
              fontSize: '35px',
              color: BLACK,
              textAlign: 'center',
              textJustify: 'center',
            }}
          >
            {itemTitle}
          </Typography>
          {children}
        </Container>
      </InstaLink>
    </Grid>
  );
};
export default PageItem;
