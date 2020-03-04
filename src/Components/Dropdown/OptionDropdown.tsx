import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as ArrowDown } from '../../Images/ArrowDown.svg';

type IItem = {
  name: string;
  border?: boolean;
};

interface IOptionDropdown {
  title: string;
  classes?: string;
  items?: IItem[];
}

// Example Usage
// <OptionDropdown
//   title='Options'
//   items={[
//     { name: 'Edit' },
//     { name: 'Duplicate' },
//     { name: 'Delete', border: true },
//   ]}
// />;

const OptionDropdown = ({ title, classes, items }: IOptionDropdown) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<string>(title);

  const node: any = useRef(); // To handle outside clicks to close the dropdown!

  const handleClickOutside = (e: MouseEvent) => {
    if (node.current.contains(e.target)) {
      return;
    }

    setOpen(false);
  };

  const handleCurrentItemChange = (newItem: string) => {
    setCurrentItem(newItem);
    setOpen(false);
  };

  useEffect(() => {
    // Specific "outside click" detection
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
    <div
      ref={node}
      className={clsx('relative inline-block text-left', classes)}
    >
      <div>
        <span className='rounded-md shadow-sm'>
          <button
            onClick={() => {
              setOpen(!isOpen);
            }}
            type='button'
            className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800'
          >
            {currentItem}
            <ArrowDown />
          </button>
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            // x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95"
            className='absolute right-0 w-56 mt-2 origin-top-right rounded-md shadow-lg'
          >
            <div className='bg-white rounded-md shadow-xs'>
              <div className='py-1'>
                {items?.map((item: IItem) => {
                  if (item.border) {
                    return (
                      <>
                        <div className='border-t border-gray-100'></div>
                        <a
                          href='#'
                          className='block px-4 py-1 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                          onClick={() => handleCurrentItemChange(item.name)}
                        >
                          {item.name}
                        </a>
                      </>
                    );
                  } else {
                    return (
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                        onClick={() => handleCurrentItemChange(item.name)}
                      >
                        {item.name}
                      </a>
                    );
                  }
                })}
                {/* <a
                  href='#'
                  className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                  onClick={() => handleCurrentItemChange('Edit')}
                >
                  Edit
                </a>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                >
                  Duplicate
                </a>
              </div>
              <div className='border-t border-gray-100'></div>
              <div className='py-1'>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                >
                  Archive
                </a>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                >
                  Move
                </a>
              </div>
              <div className='border-t border-gray-100'></div>
              <div className='py-1'>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                >
                  Share
                </a>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                >
                  Add to favorites
                </a>
              </div>
              <div className='border-t border-gray-100'></div>
              <div className='py-1'>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                >
                  Delete
                </a>*/}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { OptionDropdown };
