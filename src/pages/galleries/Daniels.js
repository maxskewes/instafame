import ImageSlider from '../../components/ImageSlider';
import { danielsjob } from './ImageArrays';
import GalleryWrapper from './GalleryWrapper';

const Daniels = () => {
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
