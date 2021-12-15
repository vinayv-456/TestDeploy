import React from 'react';
import { ReactSVG } from 'react-svg';

const DynamicSVGIcon = ({ iconUrl, width = '1.4rem' }) => (
  <ReactSVG
    src={iconUrl}
    beforeInjection={(svg) => {
      svg.classList.add('dynamicSVGIcon');
      svg.setAttribute('style', `width: ${width}`);
    }}
  />
);

export default DynamicSVGIcon;
