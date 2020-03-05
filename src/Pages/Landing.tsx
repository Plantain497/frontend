import React, { FunctionComponent, useEffect } from 'react';
// @ts-ignore
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/Auth';
import { Hero } from '../Components/LandingContent';
import { LandingNavBar } from '../Components/NavBar';

const Landing: FunctionComponent = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (auth.token) {
      navigate('/app/dashboard');
    }
  }, [auth]);

  return (
    <>
      <LandingNavBar />
      <Hero />
    </>
  );
};

export { Landing };
