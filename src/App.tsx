import React, { FunctionComponent, ReactElement } from 'react';
import { NavBar } from './Components/NavBar';

const App: FunctionComponent = (): ReactElement => {
  return (
    <div className='h-screen font-sans antialiased text-gray-900 bg-gray-100'>
      <NavBar />
      <div className='py-8 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
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
      </div>
    </div>
  );
};

export { App };
