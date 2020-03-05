import React from 'react';
import { AppContainer } from '../Containers';

const Hero = () => {
  return (
    <div className='bg-gray-100'>
      <AppContainer classes='bg-gray-100 text-gray-900'>
        <div className='px-2 py-6 sm:py-8 md:px-0 md:py-10 lg:py-18'>
          <div className='sm:text-center lg:text-left'>
            <h2 className='text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl'>
              Beautiful tools to <br className='xl:hidden' />
              <span className='text-indigo-600'>supercharge planning</span>
            </h2>
            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
              <div className='rounded-md shadow'>
                <a
                  href='#'
                  className='flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10'
                >
                  Get started
                </a>
              </div>
              <div className='mt-3 sm:mt-0 sm:ml-3'>
                <a
                  href='#'
                  className='flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 md:py-4 md:text-lg md:px-10'
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};

export { Hero };
