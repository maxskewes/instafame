import { useStyles } from './styles';
import ImageSlider from '../../components/ImageSlider';
import { thirtysecondpl } from './ImageArrays';
import GalleryWrapper from './GalleryWrapper';

const ThirtySecondPl = () => {
  const classes = useStyles();
  return (
    <GalleryWrapper>
      <ImageSlider
        jobTitle='32nd Place'
        jobArray={thirtysecondpl}
        jobFolder='32nd-place-job'
      />
    </GalleryWrapper>
  );
};

export default ThirtySecondPl;
