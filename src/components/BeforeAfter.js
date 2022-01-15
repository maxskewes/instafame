import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Container, Typography } from '@mui/material';

const WHITE = '#EFEFEF';
const BLACK = '#1C1C1C';

const useStyles = makeStyles(() => ({
  baGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const BeforeAfter = (props) => {
  const {
    beforePic = '/images/thumb-before.png',
    afterPic = '/images/thumb-after.png',
    beforeTitle = 'Before',
    afterTitle = 'After',
    color = BLACK,
    ...rest
  } = props;
  const classes = useStyles();
  const [pic, setPic] = useState(beforePic);
  const [title, setTitle] = useState(beforeTitle);
  const hovered = (pic, title) => {
    setPic(pic);
    setTitle(title);
  };

  return (
    <Container
      width='auto'
    >
      <Typography
        color={color}
        style={{
          fontFamily: 'Tinos',
          fontSize: '24px',
          textAlign: 'center',
          textJustify: 'center',
        }}
      >
        {title}
      </Typography>
      <Box className={classes.baGrid}>
        <img
          src={pic}
          onMouseEnter={() => hovered(afterPic, afterTitle)}
          onMouseLeave={() => hovered(beforePic, beforeTitle)}
          style={{ maxWidth: '100%', maxHeight: '300px' }}
          alt='Before and After photo'
        />
      </Box>
    </Container>
  );
};

export default BeforeAfter;
