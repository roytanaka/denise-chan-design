import React, { useCallback, useState, useEffect } from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import useEmblaCarousel from 'embla-carousel-react';
import './Slider.css';
import { Slide } from './Slide';

import { ImageProps } from '../../templates/project-template';
import Thumb from './Thumb';

type ImagePropType = {
  images: ImageProps[];
  thumbs: ImageProps[];
};

const Slider = ({ images, thumbs }: ImagePropType) => {
  const [emblaRef, embla] = useEmblaCarousel({ skipSnaps: true });
  const [thumbsRef, emblaThumbs] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });
  const [slidesInView, setSlidesInView] = useState<Array<number>>([]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

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
        .filter((index) => slidesInView.indexOf(index) === -1) // Remove dups
        .filter((index) => index < images.length); // Remove extra indexes
      return slidesInView.concat(viewedSlides);
    });
  }, [embla, setSlidesInView]);

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
    setPrevBtnDisabled(!embla.canScrollPrev());
    setNextBtnDisabled(!embla.canScrollNext());
  }, [embla, emblaThumbs, setSelectedIndex]);

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

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  return (
    <>
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
      <div className="embla embla--thumb">
        <div className="slider" ref={thumbsRef}>
          <div className="slider__container--thumb">
            {thumbs.map((thumb, index) => (
              <Thumb
                key={thumb.file.id}
                thumb={thumb}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
