import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import InstaLink from '../components/InstaLink';

const WHITE = '#EFEFEF';
const BLACK = '#1C1C1C';

const useStyles = makeStyles((theme) => ({
  div: {
    backgroundColor: BLACK,
    height: 'auto',
    maxWidth: 'full',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
      padding: 'none',
    },
  },
  textDiv: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    color: WHITE,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-around',
  },
  linkDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-around',
  },
}));

const SmDisplayHead = () => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <div className={classes.textDiv}>
        <div>
          <Typography>
            <b>Insta-Fame Studios</b>
          </Typography>
        </div>
        <div>
          <Typography>CCB#179140 - Ben Lund - (503) 484-3855</Typography>
        </div>
        <div>
          <Typography>instafamestudios@gmail.com</Typography>
        </div>
      </div>
      <div
        className={classes.linkDiv}
        style={{
          backgroundColor: BLACK,
          color: WHITE,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <div>
          <InstaLink to='/'>
            <h4>Home</h4>
          </InstaLink>
        </div>
        <div>
          <InstaLink to='/galleries'>
            <h4>Galleries</h4>
          </InstaLink>
        </div>
        <div>
          <InstaLink to='/services'>
            <h4>Services</h4>
          </InstaLink>
        </div>
      </div>
    </div>
  );
};

export default SmDisplayHead;
