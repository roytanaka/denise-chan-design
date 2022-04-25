import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ImageProps } from '../../templates/project-template';

type ThumbProps = {
  thumb: ImageProps;
  onClick: React.MouseEventHandler;
  selected: boolean;
};
const Thumb = ({ thumb, onClick, selected }: ThumbProps) => {
  const img = getImage(thumb.file.childImageSharp);
  return (
    <div className={`slide-thumb ${selected ? 'slide-thumb__selected' : ''}`}>
      <button className="slide-thumb__button" onClick={onClick}>
        {img && (
          <GatsbyImage image={img} alt={`${thumb.description} thumbnail`} />
        )}
      </button>
    </div>
  );
};

export default Thumb;
