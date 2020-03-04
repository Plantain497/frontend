import React, { FunctionComponent, useEffect } from 'react';
// @ts-ignore
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/Auth';
import { AppContainer } from '../Components/Containers';
import { LandingNavBar } from '../Components/NavBar';

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
