import { makeStyles } from '@mui/styles';

const WHITE = '#EFEFEF';
const BLACK = '#1C1C1C';

export const useStyles = makeStyles(() => ({
  homeBox: {
    minHeight: '100vh',
    backgroundColor: BLACK,
    color: WHITE,
    paddingBottom: 50,
  },
  gridContainer: {
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
