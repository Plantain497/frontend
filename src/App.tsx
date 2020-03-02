import React, { FunctionComponent, ReactElement } from 'react';
// @ts-ignore
import { Route, Routes } from 'react-router-dom';
import { Landing, PlantainApp } from './Components/Pages';
import { AuthProvider } from './Components/utils/';

const App: FunctionComponent = (): ReactElement => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Landing />} />
        {/* <Route path='/app/login' element={<Login />} /> */}
        <Route path='/app/dashboard' element={<PlantainApp />} />
      </Routes>
    </AuthProvider>
  );
};

export { App };
