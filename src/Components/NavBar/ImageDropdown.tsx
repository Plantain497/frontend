import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface IDropdownElement {
  label: string;
  href?: string;
}

interface IImageDropdown {
  imgClasses?: string;
  classes?: string;
  imgSrc?: string;
  dropdownElements?: IDropdownElement[];
}

const ImageDropdown = ({
  imgClasses,
  classes,
  imgSrc,
  dropdownElements,
}: IImageDropdown) => {
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={clsx(
              'absolute right-0 w-48 mt-2 -mr-1 origin-top-right rounded-md shadow-lg'
            )}
          >
            <div className='py-1 bg-white rounded-md shadow-xs'>
              {dropdownElements?.map(
                (element: IDropdownElement, index: number) => {
                  return (
                    <a
                      href={element.href}
                      key={index}
                      className='block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100'
                    >
                      {element.label}
                    </a>
                  );
                }
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { ImageDropdown };
