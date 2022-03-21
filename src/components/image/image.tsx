type ImageProps = {
  image: string;
  type: string;
}

function Image({image, type}: ImageProps): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt={type}/>
    </div>
  );
}

export default Image;
