import React, { FunctionComponent, ReactElement } from 'react';
// @ts-ignore
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Components/Auth';
import { Landing, PlantainApp } from './Pages';

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
