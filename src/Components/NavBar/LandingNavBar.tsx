import React, { FunctionComponent, ReactElement, useState } from 'react';
import { AppContainer } from '../Containers';
import { Hamburger } from './Hamburger';
import { LargeNavButton, SmallNavButton } from './NavButtons';

const LandingNavBar: FunctionComponent = (): ReactElement => {
  const [selected, setSelected] = useState<string>('Product');
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  return (
    <nav className='bg-gray-100'>
      {/* Proper Menu */}

      <AppContainer>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              onClick={() => setHamburgerOpen(!hamburgerOpen)}
              className='inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white'
            >
              <Hamburger isOpen={hamburgerOpen} />
            </button>
          </div>
          <div className='flex items-center justify-center flex-1 sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0'>
              <img
                src='https://tailwindui.com/img/logos/workflow-mark-on-white.svg'
                className='block w-auto h-8 lg:hidden'
                alt='Logo'
              />
              <img
                src='https://tailwindui.com/img/logos/workflow-mark-on-white.svg'
                className='hidden w-auto h-8 lg:block'
                alt='Logo'
              />
            </div>

            {/* Large Menu */}

            <div className='hidden sm:block sm:ml-6'>
              <div className='flex'>
                <LargeNavButton
                  itemName='Product'
                  currentSelectedItem={selected}
                  setSelectedItem={setSelected}
                  inverted={true}
                />
                <LargeNavButton
                  itemName='Features'
                  classes='ml-4'
                  currentSelectedItem={selected}
                  setSelectedItem={setSelected}
                  inverted={true}
                />
                <LargeNavButton
                  itemName='Getting Started'
                  classes='ml-4'
                  currentSelectedItem={selected}
                  setSelectedItem={setSelected}
                  inverted={true}
                />
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            {/* <button className='relative block w-full px-4 py-2 text-sm font-semibold leading-snug leading-6 text-white transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md shadow-md sm:h-auto sm:ml-4 sm:w-auto hover:bg-gray-800 focus:outline-none focus:bg-gray-800 hover:bg-gray-600'>
              Sign Up
            </button> */}
            <button className='flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded hover:text-gray-100 hover:bg-purple-700 focus:outline-none focus:shadow-outline'>
              Sign Up
            </button>
            {/* <Notifications
              classes={'relative ml-3'}
              dropdownElements={[{ label: 'React Scheduler Overdue' }]}
            />
            <ImageDropdown
              imgSrc={Avatar}
              imgClasses={'w-8 h-8 rounded-full'}
              classes={'relative ml-3'}
              dropdownElements={[
                { label: 'Your Profile' },
                { label: 'Settings' },
                { label: 'Sign Out' },
              ]}
            /> */}
          </div>
        </div>

        {/* Small Menu */}

        <div className='sm:hidden'>
          {hamburgerOpen && (
            <div className='px-2 pt-2 pb-3'>
              <SmallNavButton
                itemName={'Product'}
                currentSelectedItem={selected}
                setSelectedItem={setSelected}
                inverted={true}
              />
              <SmallNavButton
                classes='mt-1'
                itemName={'Features'}
                currentSelectedItem={selected}
                setSelectedItem={setSelected}
                inverted={true}
              />
              <SmallNavButton
                classes='mt-1'
                itemName={'Getting Started'}
                currentSelectedItem={selected}
                setSelectedItem={setSelected}
                inverted={true}
              />
            </div>
          )}
        </div>
      </AppContainer>
    </nav>
  );
};

export { LandingNavBar };
