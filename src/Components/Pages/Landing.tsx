import React, { FunctionComponent, useEffect } from 'react';
// @ts-ignore
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/Auth';
import { GoogleSignInButton } from '../GoogleSignInButton';

const Landing: FunctionComponent = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  // TODO: Uncomment this
  useEffect(() => {
    if (auth.userObject) {
      console.log(auth.userObject.profileObj);
    }
    // if (auth.token) {
    //   navigate('/app/dashboard');
    // }
  }, [auth]);

  return (
    <div>
      <GoogleSignInButton />
    </div>
  );
};

export { Landing };

