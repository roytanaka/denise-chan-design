import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { ImageProps } from '../../templates/project-template';

type ThumbProps = {
  thumb: ImageProps;
  onClick: React.MouseEventHandler;
  selected: boolean;
};
const Thumb = ({ thumb, onClick, selected }: ThumbProps) => {
  return (
    <div className={`slide-thumb ${selected ? 'slide-thumb__selected' : ''}`}>
      <button className="slide-thumb__button" onClick={onClick}>
        <img
          src={thumb.secure_url.replace(
            'q_auto,f_auto',
            'b_auto,c_lpad,f_auto,h_150,q_auto:low,w_200'
          )}
          alt={`${thumb.context?.custom?.alt || ''} thumbnail`}
        />
      </button>
    </div>
  );
};

export default Thumb;
