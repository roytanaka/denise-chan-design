import React, { useCallback, useState, useEffect } from 'react';
import { getImage, getSrcSet, ImageDataLike } from 'gatsby-plugin-image';
import useEmblaCarousel from 'embla-carousel-react';
import { slider, slider__container, slider__slide } from './Slider.module.css';
import { Slide } from './Slide';

type ImagePropType = {
  images: {
    description: string;
    file: {
      childImageSharp: ImageDataLike;
      id: string;
    };
  }[];
};

const Slider = ({ images }: ImagePropType) => {
  const [emblaRef, embla] = useEmblaCarousel();

  const [slidesInView, setSlidesInView] = useState<Array<number>>([]);
  const findSlidesInView = useCallback(() => {
    if (!embla) return;

    setSlidesInView((slidesInView) => {
      if (slidesInView.length === embla.slideNodes().length) {
        embla.off('select', findSlidesInView);
      }
      const inView: number[] = embla
        .slidesInView(true)
        .filter((index) => slidesInView.indexOf(index) === -1);
      return slidesInView.concat(inView);
    });
  }, [embla, setSlidesInView]);

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnDisabled(!embla.canScrollPrev());
    setNextBtnDisabled(!embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    findSlidesInView();
    embla.on('select', onSelect);
    embla.on('select', findSlidesInView);
  }, [embla, onSelect, findSlidesInView]);

  const scrollPrev = useCallback(() => {
    embla && embla.scrollPrev();
  }, [embla]);
  const scrollNext = useCallback(() => {
    embla && embla.scrollNext();
  }, [embla]);

  return (
    <div className={slider} ref={emblaRef}>
      <div className={slider__container}>
        {images.map((img, index) => {
          const image = getSrcSet(img.file.childImageSharp);
          const placeholder = getImage(img.file.childImageSharp)?.placeholder
            ?.fallback;
          if (!image) return;
          return (
            <Slide
              key={img.file.id}
              imgSrc={image}
              inView={slidesInView.indexOf(index) > -1}
              description={img.description}
              placeholder={placeholder}
            />
          );
        })}
      </div>
      <button
        className="embla__prev"
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
      >
        Prev
      </button>
      <button
        className="embla__next"
        onClick={scrollNext}
        disabled={nextBtnDisabled}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
