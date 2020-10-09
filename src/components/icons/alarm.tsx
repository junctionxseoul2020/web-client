import React from 'react';

const Alarm: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className="icon-alarm"
    >
      <path fill="#fff" d="M11 8h2v4h3v2h-5z" transform="translate(-3 -3)" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M3 12a9 9 0 1 1 9 9 9 9 0 0 1-9-9zm2 0a7 7 0 1 1 7 7 7 7 0 0 1-7-7z"
        transform="translate(-3 -3)"
      />
    </svg>
  );
};

export default Alarm;
