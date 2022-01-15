import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  alBox: {
    display: 'flex',
    maxHeight: '130px',
    // width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 1.3% 0 0',
    },
  },
  initialI: {
    padding: '0 2px 12px 10px',
    opacity: '80%',
    height: '100%',
  },
  nstafame: {
    padding: '0 7px',
    height: '60%',
    opacity: '80%',
  },
  finalXpoint: {
    padding: '12px 10px 0 3px',
    opacity: '80%',
    height: '100%',
  },
}));

export default function AnimatedLogo() {
  const classes = useStyles();
  return (
    <Box width='100%' className={classes.alBox}>
      <motion.img
        animate={{
          scale: [1, 3, 1, 3, 1, 3, 1],
          x: [0, 100, 0, 100, 0, 100, 0],
        }}
        transition={{ duration: 1.5 }}
        className={classes.initialI}
        style={{}}
        src='/images/logo-i.svg'
        alt='!i'
      />
      <img
        src='/images/logo-nsta-fame.svg'
        alt='nsta-fame'
        className={classes.nstafame}
      />
      <motion.img
        animate={{
          scale: [1, 3, 1, 3, 1, 3, 1],
          x: [0, -100, 0, -100, 0, -100, 0],
        }}
        transition={{ duration: 1.5 }}
        className={classes.finalXpoint}
        src='/images/logo-!.svg'
        alt='!'
      />
    </Box>
  );
}
