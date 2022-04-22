import React, { useCallback } from 'react';
import { getSrcSet } from 'gatsby-plugin-image';
import useEmblaCarousel from 'embla-carousel-react';
import { embla, embla__container, embla__slide } from './Slider.module.css';

type ImagePropType = { images: any[] };

const Slider = ({ images }: ImagePropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={embla} ref={emblaRef}>
      <div className={embla__container}>
        {images.map((img) => {
          const image = getSrcSet(img.file.childImageSharp);
          if (!image) return;
          return (
            <div
              style={{ position: 'relative' }}
              className={embla__slide}
              key={img.file.id}
            >
              <img
                style={{ width: '100%' }}
                srcSet={image}
                alt={img.description}
              />
            </div>
          );
        })}
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  );
};

export default Slider;
