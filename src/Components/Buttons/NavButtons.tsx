import clsx from 'clsx';
import React, { ReactElement } from 'react';

interface INavButton {
  itemName: string;
  currentSelectedItem: string;
  classes?: string;
  inverted?: boolean;
  setSelectedItem(itemName: string): void;
}

const LargeNavButton = ({
  itemName,
  currentSelectedItem,
  setSelectedItem,
  classes,
  inverted,
}: INavButton): ReactElement => {
  return (
    <span
      className={clsx(classes, {
        'px-3 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md focus:outline-none': true,
        'text-white bg-gray-900 focus:bg-gray-700 hover:bg-gray-700':
          !inverted && itemName === currentSelectedItem,
        'text-gray-300 hover:text-white focus:text-white':
          !inverted && itemName !== currentSelectedItem,

        'text-purple-500 focus:bg-gray-200 focus:text-purple-700 hover:bg-gray-200 hover:text-purple-700':
          inverted && itemName === currentSelectedItem,
        'text-gray-500 focus:bg-gray-200 focus:text-purple-700 hover:bg-gray-200 hover:text-purple-700':
          inverted && itemName !== currentSelectedItem,
      })}
      onClick={() => {
        setSelectedItem(itemName);
      }}
      role='button'
    >
      {itemName}
    </span>
  );
};

const SmallNavButton = ({
  itemName,
  currentSelectedItem,
  setSelectedItem,
  classes,
  inverted,
}: INavButton): ReactElement => {
  return (
    <span
      className={clsx(classes, {
        'block px-3 py-2 text-base font-medium transition duration-150 ease-in-out rounded-md': true,
        'text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700':
          !inverted && currentSelectedItem === itemName,
        'text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700':
          !inverted && currentSelectedItem !== itemName,

        'text-purple-500 focus:bg-gray-200 focus:text-purple-700 hover:bg-gray-200 hover:text-purple-700':
          inverted && itemName === currentSelectedItem,
        'text-gray-500 focus:bg-gray-200 focus:text-purple-700 hover:bg-gray-200 hover:text-purple-700':
          inverted && itemName !== currentSelectedItem,
      })}
      onClick={() => {
        setSelectedItem(itemName);
      }}
      role='button'
    >
      {itemName}
    </span>
  );
};

export { LargeNavButton, SmallNavButton };
