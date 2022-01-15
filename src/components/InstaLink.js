import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  instaLink: {
    textDecoration: 'none',
    color: 'inherit',
    '&:visited': {
      color: 'inherit',
    },
    '&:hover': {
      opacity: '70%',
    },
  },
}));

const InstaLink = (props) => {
  const { to, children } = props;
  const classes = useStyles();
  return (
    <NavLink className={classes.instaLink} to={to}>
      {children}
    </NavLink>
  );
};

export default InstaLink;
