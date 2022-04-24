import React, { useCallback, useState, useEffect } from 'react';
import { getImage, getSrcSet, ImageDataLike } from 'gatsby-plugin-image';
import useEmblaCarousel from 'embla-carousel-react';
import './Slider.css';
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
      const inView: number[] = embla.slidesInView(true);

      const maxIndexInView = Math.max(...inView);
      if (maxIndexInView !== images.length - 1) {
        inView.push(maxIndexInView + 1);
      }

      const viewedSlides = inView
        .filter((index) => slidesInView.indexOf(index) === -1)
        .filter((index) => index < images.length);
      return slidesInView.concat(viewedSlides);
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
    <div className="slider" ref={emblaRef}>
      <div className="slider__container">
        {images.map((img, index) => (
          <Slide
            key={img.file.id}
            image={img}
            inView={slidesInView.indexOf(index) > -1}
          />
        ))}
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
