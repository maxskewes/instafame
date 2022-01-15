import { Box } from '@mui/material';
import ServiceWrapper from './ServiceWrapper';
import metalWorkLogo from '../../assets/metalworkLogo.png';
import ImageSlider from '../../components/ImageSlider';
import { danielsjob } from '../galleries/ImageArrays';

export default function MetalWork() {
  return (
    <ServiceWrapper>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        alignContent='center'
      >
        <img src={metalWorkLogo} alt='Metal Work' style={{ height: '100px' }} />
      </Box>
      <ImageSlider
        jobArray={danielsjob}
        jobFolder='daniels72dpi'
      />
    </ServiceWrapper>
  );
}
