import React, { useState } from 'react';
import ImagePlaceholder from './ImagePlaceholder';

function Image(props) {
  const [loaded, setLoaded] = useState(false);
  const { src } = props;

  function handleImageLoaded() {
    setLoaded(true);
  }

  return (
    <div className="card__img">
      {!loaded && <ImagePlaceholder />}
      <img
        alt="Dog"
        src={src}
        style={!loaded ? { opacity: 0 } : { opacity: 1 }}
        onLoad={handleImageLoaded}
      />
    </div>
  );
}

export default Image;
