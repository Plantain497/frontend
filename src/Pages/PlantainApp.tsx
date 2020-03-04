import React, { FunctionComponent } from 'react';
import { AppContainer } from '../Components/Containers';
import { NavBar } from '../Components/NavBar';

const PlantainApp: FunctionComponent = () => {
  return (
    <div className='h-screen text-gray-900 bg-gray-100'>
      <NavBar />
      <AppContainer classes='py-8'>
        <h1 className='text-xl'>Tailwind Setup</h1>
        <div className='py-4'>
          <button className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>
            Success
          </button>
          <button className='inline-flex px-2 ml-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full'>
            Error
          </button>
          <button className='inline-flex px-2 ml-2 text-xs font-semibold leading-5 text-yellow-800 bg-yellow-100 rounded-full'>
            Warning
          </button>
        </div>
      </AppContainer>
    </div>
  );
};

export { PlantainApp };
