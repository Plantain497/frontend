import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
// import { Transition } from 'react-transition-group';

interface IImageDropdown {
  imgClasses?: string;
  classes?: string;
  imgSrc?: string;
  // dropdownElements?: {
  //   label: string;
  //   href: string;
  // }[];
}

const ImageDropdown = ({ imgClasses, classes, imgSrc }: IImageDropdown) => {
  const node: any = useRef(); // To handle outside clicks to close the dropdown!
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleClickOutside = (e: MouseEvent) => {
    if (node.current.contains(e.target)) {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    // tslint:disable-next-line: no-unsafe-any
    <div ref={node} className={classes}>
      <button
        className='flex items-center max-w-xs text-sm transition duration-150 ease-in-out rounded-full focus:outline-none'
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <img className={imgClasses} src={imgSrc} alt='Profile' />
      </button>
      <div
        // x-transition:enter="transition ease-out duration-100"
        // x-transition:enter-start="transform opacity-0 scale-95"
        // x-transition:enter-end="transform opacity-100 scale-100"
        // x-transition:leave="transition ease-in duration-75"
        // x-transition:leave-start="transform opacity-100 scale-100"
        // x-transition:leave-end="transform opacity-0 scale-95"

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
