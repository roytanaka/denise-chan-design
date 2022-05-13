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

  const transformedSrc = image.secure_url.replace(
    'q_auto,f_auto',
    'q_auto,f_auto,ar_6:4,c_lpad,fl_preserve_transparency'
  );

  const setLoaded = useCallback(() => {
    if (inView) setHasLoaded(true);
  }, [inView, setHasLoaded]);

  return (
    <>
      <div className="slider__slide">
        <img
          className={`slider__img ${hasLoaded ? 'slider__has-loaded' : ''}`}
          srcSet={inView ? transformedSrc : TRANSPARENT_IMG}
          alt={image.context?.custom?.alt}
          onLoad={setLoaded}
        />
      </div>
    </>
  );
};
