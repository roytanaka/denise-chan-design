import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { ImageProps } from '../../templates/project-template';
import { slideThumb, thumbBtn } from './Thumb.module.scss';

type ThumbProps = {
  thumb: ImageProps;
  onClick: React.MouseEventHandler;
  selected: boolean;
};
const Thumb = ({ thumb, onClick, selected }: ThumbProps) => {
  return (
    <div className={slideThumb}>
      <button className={thumbBtn} onClick={onClick}>
        <img
          width={200}
          height={150}
          src={thumb.secure_url.replace(
            'q_auto,f_auto',
            'b_auto,c_lpad,f_auto,h_150,q_auto:low,w_200'
          )}
          alt={`${thumb.context?.custom?.alt || ''} thumbnail`}
          data-selected={selected}
        />
      </button>
    </div>
  );
};

export default Thumb;
