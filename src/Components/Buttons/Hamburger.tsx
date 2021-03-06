import React from 'react';

interface IHamburger {
  isOpen: boolean;
}

const Hamburger = ({ isOpen }: IHamburger) => {
  return (
    <svg
      className='w-6 h-6'
      stroke='currentColor'
      fill='none'
      viewBox='0 0 24 24'
    >
      {/* 3 lines */}
      {!isOpen && (
        <path
          className='inline-flex'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M4 6h16M4 12h16M4 18h16'
        ></path>
      )}
      {/* X */}
      {isOpen && (
        <path
          className='inline-flex'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M6 18L18 6M6 6l12 12'
        ></path>
      )}
    </svg>
  );
};

export { Hamburger };
