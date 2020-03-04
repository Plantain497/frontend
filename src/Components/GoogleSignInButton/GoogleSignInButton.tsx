import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { useAuth } from '../Auth';

interface IGoogleSignInButton {
  classes?: string;
  children?: ReactNode;
}

const GoogleSignInButton = ({ classes, children }: IGoogleSignInButton) => {
  const { signIn } = useAuth();

  return (
    <button
      className={clsx(
        'flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out  border border-transparent rounded focus:outline-none focus:shadow-outline',
        classes
      )}
      onClick={signIn}
    >
      {children}
    </button>
  );
};

export { GoogleSignInButton };
