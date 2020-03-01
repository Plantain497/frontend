import React, { FunctionComponent, ReactElement } from 'react';
// @ts-ignore
import { Route, Routes } from 'react-router-dom';
import { Landing, PlantainApp } from './Components/Routes';

const App: FunctionComponent = (): ReactElement => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='app' element={<PlantainApp />} />
    </Routes>
  );
};

export { App };
