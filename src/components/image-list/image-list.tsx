import Image from '../image/image';

type ImageListProps = {
  images: string[];
  type: string;
}

const MAX_IMAGES = 6;

function ImageList({images, type}: ImageListProps): JSX.Element {
  const imagesList = images?.slice(0, MAX_IMAGES);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {imagesList?.map((image) => <Image image={image} type={type} key={image}/>)}
      </div>
    </div>
  );
}

export default ImageList;
