import { makeStyles } from '@mui/styles';
import crumpledBG from '../../assets/graph-crumpled-bg.png';

export const useStyles = makeStyles((theme) => ({
  pageBox: {
    backgroundImage: `url(${crumpledBG})`,
    minHeight: '100vh',
    height: 'auto',
    width: 'auto',
    display: 'flex',
    border: '5px solid black',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
}));
