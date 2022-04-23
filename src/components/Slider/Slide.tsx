import React, { useState, useCallback } from 'react';
import { slider__slide } from './Slider.module.css';

type SlideProps = {
  imgSrc: string;
  description: string;
  inView: boolean;
  placeholder?: string;
};

export const Slide = ({
  imgSrc,
  description,
  inView,
  placeholder,
}: SlideProps) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  const setLoaded = useCallback(() => {
    if (inView) setHasLoaded(true);
  }, [inView, setHasLoaded]);

  return (
    <div className={`embla__slide ${hasLoaded ? 'has-loaded' : ''}`}>
      <div className={slider__slide}>
        <img
          style={{ width: '100%' }}
          srcSet={inView ? imgSrc : placeholder}
          alt={description}
          onLoad={setLoaded}
        />
      </div>
    </div>
  );
};
