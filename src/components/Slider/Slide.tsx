import { getImage, getSrcSet, ImageDataLike } from 'gatsby-plugin-image';
import React, { useState, useCallback } from 'react';

type SlideProps = {
  image: {
    description: string;
    file: {
      childImageSharp: ImageDataLike;
      id: string;
    };
  };
  inView: boolean;
};

export const Slide = ({ image, inView }: SlideProps) => {
  const TRANSPARENT_IMG =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

  const src = getSrcSet(image.file.childImageSharp) || TRANSPARENT_IMG;
  const imageData = getImage(image.file.childImageSharp);
  if (!imageData) return <div></div>;

  const [hasLoaded, setHasLoaded] = useState(false);

  const setLoaded = useCallback(() => {
    if (inView) setHasLoaded(true);
  }, [inView, setHasLoaded]);

  return (
    <>
      <div
        className="slider__slide"
        style={{ backgroundColor: imageData.backgroundColor || '#fff' }}
      >
        <img
          className={`slider__img ${hasLoaded ? 'slider__has-loaded' : ''}`}
          srcSet={inView ? src : TRANSPARENT_IMG}
          alt={image.description}
          onLoad={setLoaded}
        />
      </div>
    </>
  );
};
