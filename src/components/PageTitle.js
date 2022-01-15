import { Typography } from '@mui/material';

const BLACK = '#1C1C1C';

const PageTitle = (props) => {
  const { pageTitle, ...rest } = props;
  return (
    <Typography
      color={BLACK}
      style={{
        fontFamily: 'Tinos',
        fontSize: '50px',
        paddingTop: 10,
      }}
    >
      {pageTitle}
    </Typography>
  );
};

export default PageTitle;
