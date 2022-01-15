import { useStyles } from './styles';
import ImageSlider from '../../components/ImageSlider';
import { danielsjob } from './ImageArrays';
import GalleryWrapper from './GalleryWrapper';

const Daniels = () => {
  const classes = useStyles();
  return (
    <GalleryWrapper>
      <ImageSlider
        jobTitle='Daniels Job'
        jobArray={danielsjob}
        jobFolder='daniels72dpi'
      />
    </GalleryWrapper>
  );
};

export default Daniels;
