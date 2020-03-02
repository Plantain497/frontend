import React from 'react';
import { useAuth } from '../utils/Auth';

const GoogleSignInButton = () => {
  const { signIn } = useAuth();

  return (
    <button
      className='inline-flex px-4 py-2 text-xl font-semibold leading-5 text-blue-700 bg-blue-100 rounded-full'
      onClick={signIn}
    >
      Sign in with Google
    </button>
  );
};

export { GoogleSignInButton };
