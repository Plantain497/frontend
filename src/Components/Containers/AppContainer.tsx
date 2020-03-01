import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface IAppContainer {
  children: ReactNode;
  classes?: string;
}

const AppContainer = ({ children, classes }: IAppContainer) => {
  return (
    <div className={clsx('mx-auto max-w-7xl sm:px-6 lg:px-8', classes)}>
      {children}
    </div>
  );
};

export { AppContainer };
