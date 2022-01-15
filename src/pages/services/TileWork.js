import { Box } from '@mui/material';
import ServiceWrapper from './ServiceWrapper';
import tileworkLogo from '../../assets/tileworkLogo.png';
import ImageSlider from '../../components/ImageSlider';
import { danielsjob } from '../galleries/ImageArrays';

const TileWork = () => {
  return (
    <ServiceWrapper>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        alignContent='center'
      >
        <img src={tileworkLogo} alt='Tile Work' style={{ width: '500px' }} />
      </Box>
      <ImageSlider jobArray={danielsjob} jobFolder='daniels72dpi' />
    </ServiceWrapper>
  );
};

export default TileWork;
