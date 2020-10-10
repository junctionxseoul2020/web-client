import React from 'react';

const CloseIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      aria-hidden="true"
      style={{ msTransform: 'rotate(360deg)' }}
      transform="rotate(360)"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default CloseIcon;
