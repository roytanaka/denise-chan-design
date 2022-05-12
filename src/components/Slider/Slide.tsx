import { getImage, getSrcSet, ImageDataLike } from 'gatsby-plugin-image';
import React, { useState, useCallback } from 'react';
import { ImageProps } from '../../templates/project-template';

type SlideProps = {
  image: ImageProps;
  inView: boolean;
};

export const Slide = ({ image, inView }: SlideProps) => {
  const TRANSPARENT_IMG =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
  const [hasLoaded, setHasLoaded] = useState(false);

  const setLoaded = useCallback(() => {
    if (inView) setHasLoaded(true);
  }, [inView, setHasLoaded]);

  return (
    <>
      <div className="slider__slide">
        <img
          className={`slider__img ${hasLoaded ? 'slider__has-loaded' : ''}`}
          srcSet={inView ? image.secure_url : TRANSPARENT_IMG}
          alt={image.context?.custom?.alt}
          onLoad={setLoaded}
        />
      </div>
    </>
  );
};
