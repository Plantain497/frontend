import React, { FunctionComponent, useEffect } from 'react';
// @ts-ignore
import { useNavigate } from 'react-router-dom';
import { GoogleSignInButton } from '../GoogleSignInButton';
import { useAuth } from '../utils/Auth';

const Landing: FunctionComponent = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  // TODO: Uncomment this
  useEffect(() => {
    console.log(auth);
    // if (auth.token) {
    //   navigate('/app/dashboard');
    // }
  }, [auth]);

  return <GoogleSignInButton />;
};

export { Landing };
