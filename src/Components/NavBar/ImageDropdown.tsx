import clsx from 'clsx';
import React, { useState } from 'react';
// import { Transition } from 'react-transition-group';

interface IImageDropdown {
  classes?: string;
  imgSrc?: string;
}

const ImageDropdown = ({ classes, imgSrc }: IImageDropdown) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className={classes}>
      <div>
        <button
          className='flex items-center max-w-xs text-sm transition duration-150 ease-in-out rounded-full focus:outline-none focus:shadow-solid-white'
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <img className='w-8 h-8 rounded-full' src={imgSrc} alt='Profile' />
        </button>
      </div>
      <div
        // x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95"

        className={clsx(
          'absolute right-0 w-48 mt-2 -mr-1 origin-top-right rounded-md shadow-lg',
          {
            hidden: !isOpen,
            block: isOpen,
          }
        )}
      >
        <div className='py-1 bg-white rounded-md shadow-xs'>
          <a
            href='/'
            className='block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100'
          >
            Your Profile
          </a>
          <a
            href='/'
            className='block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100'
          >
            Settings
          </a>
          <a
            href='/'
            className='block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100'
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
};

export { ImageDropdown };
