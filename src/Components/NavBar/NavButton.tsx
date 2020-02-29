import clsx from 'clsx';
import React, { ReactElement } from 'react';

interface INavButton {
  itemName: string;
  currentSelectedItem: string;
  classes?: string;
  setSelectedItem(itemName: string): void;
}

const LargeNavButton = ({
  itemName,
  currentSelectedItem,
  setSelectedItem,
  classes,
}: INavButton): ReactElement => {
  return (
    <span
      className={clsx(classes, {
        'px-3 py-2 text-sm font-medium rounded-md transition duration-150 ease-in-out focus:outline-none focus:text-white focus:bg-gray-700': true,
        'text-white bg-gray-900': currentSelectedItem === itemName,
        'text-gray-300 hover:text-white hover:bg-gray-700':
          currentSelectedItem !== itemName,
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
}: INavButton): ReactElement => {
  return (
    <span
      className={clsx(classes, {
        'block px-3 py-2 text-base font-medium transition duration-150 ease-in-out rounded-md focus:text-white focus:bg-gray-700': true,
        'text-white bg-gray-900 focus:outline-none':
          currentSelectedItem === itemName,
        'text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none':
          currentSelectedItem !== itemName,
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
