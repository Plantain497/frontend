import React, { FunctionComponent, useEffect } from 'react';
// @ts-ignore
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/Auth';
import { AppContainer } from '../Containers';
import { LandingNavBar } from '../NavBar';

const Landing: FunctionComponent = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  // TODO: Uncomment this
  useEffect(() => {
    if (auth.userObject) {
      console.log(auth.userObject);
    }
    // if (auth.token) {
    //   navigate('/app/dashboard');
    // }
  }, [auth]);

  return (
    <>
      <LandingNavBar />
      <AppContainer classes='text-gray-900 bg-gray-100'>
        <div></div>
      </AppContainer>
    </>
  );
};

export { Landing };
