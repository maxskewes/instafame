import { makeStyles } from '@mui/styles';

const WHITE = '#EFEFEF';

export const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundImage: "URL('/images/instafame-header.png')",
    display: 'flex',
    direction: 'row',
    [theme.breakpoints.down('md')]: {
      backgroundImage: "URL('/images/instafame-header-dark.png')",
    },
  },
  linkDiv: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      padding: '20px 0',
    },
  },
  linkText: {
    color: WHITE,
    fontFamily: 'Tinos',
    fontWeight: '500',
    // [theme.breakpoints.up('xl')]: {
    //   fontSize: '50px',
    // },
    // [theme.breakpoints.up('lg')]: {
    //   fontSize: '40px',
    // },
    // [theme.breakpoints.up('xs')]: {
    //   fontSize: '30px',
    // },
    '&:hover': {
      opacity: '70%',
    },
  },
  contactBox: {
    maxHeight: 150,
    minWidth: 200,
    display: 'flex',
    alignItems: 'center',
    marginRight: 5,
  },
  spaceDiv: {
    width: '200px',
    height: '150px',
    paddingLeft: 20,
    [theme.breakpoints.down('sm')]: {
      display: 'hidden',
      width: 0,
    },
  },
}));
