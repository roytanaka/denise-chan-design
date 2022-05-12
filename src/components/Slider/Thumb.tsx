import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { ImageProps } from '../../templates/project-template';

type ThumbProps = {
  thumb: ImageProps;
  onClick: React.MouseEventHandler;
  selected: boolean;
};
const Thumb = ({ thumb, onClick, selected }: ThumbProps) => {
  console.log('🚀 ~ file: Thumb.tsx ~ line 11 ~ Thumb ~ thumb', thumb);
  return (
    <div className={`slide-thumb ${selected ? 'slide-thumb__selected' : ''}`}>
      <button className="slide-thumb__button" onClick={onClick}>
        click
        <img src={thumb.secure_url} alt={`thumbnail`} />
      </button>
    </div>
  );
};

export default Thumb;
