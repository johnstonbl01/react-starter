import React from 'react';

const Icon = ({ width = '1.5rem', viewBox = '0 0 512 512', icon, color = '#fff', style }) => {
  return (
    <svg
      aria-hidden="true"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      css={style}
    >
      <path fill={color} d={icon} />
    </svg>
  );
};

export default Icon;
