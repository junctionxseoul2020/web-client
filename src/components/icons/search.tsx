import React from 'react';

const SearchIcon: React.FC = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className="icon-search"
      >
        <g>
          <g>
            <path
              fill="#030303"
              fillRule="evenodd"
              d="M13.092 9.721a5.079 5.079 0 1 0-.9.9l.027.029 2.694 2.694a.635.635 0 0 0 .9-.9L13.12 9.747zm-1.318-5.81a3.81 3.81 0 1 1-5.388 0 3.81 3.81 0 0 1 5.387 0z"
              transform="translate(-760 -10) translate(764 14) translate(-4 -1.525)"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default SearchIcon;
