import React, { FunctionComponent, ReactElement, useState } from 'react';
import AvatarSrc from './Avatar.jpg';
import { ImageDropdown } from './ImageDropdown';
import { ReactComponent as Logo } from './Logo.svg';
import { NavButton } from './NavButton';
import { ReactComponent as NotificationBell } from './NotificationBell.svg';

const NavBar: FunctionComponent = (): ReactElement => {
  const [selected, setSelected] = useState<string>('Dashboard');

  return (
    <nav className='bg-gray-800'>
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='border-b border-gray-700'>
          <div className='flex items-center justify-between h-16 px-4 sm:px-0'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <Logo className='w-8 h-8' />
              </div>
              <div className='hidden md:block'>
                <div className='flex items-baseline ml-10'>
                  <NavButton
                    itemName={'Dashboard'}
                    currentSelectedItem={selected}
                    setSelectedItem={setSelected}
                  />
                  <NavButton
                    classes='ml-4'
                    itemName={'Team'}
                    currentSelectedItem={selected}
                    setSelectedItem={setSelected}
                  />
                  <NavButton
                    classes='ml-4'
                    itemName={'Projects'}
                    currentSelectedItem={selected}
                    setSelectedItem={setSelected}
                  />
                  <NavButton
                    classes='ml-4'
                    itemName={'Calendar'}
                    currentSelectedItem={selected}
                    setSelectedItem={setSelected}
                  />
                  <NavButton
                    classes='ml-4'
                    itemName={'Reports'}
                    currentSelectedItem={selected}
                    setSelectedItem={setSelected}
                  />
                </div>
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='flex items-center ml-4 md:ml-6'>
                <button className='p-1 text-gray-400 transition duration-150 ease-in-out border-2 border-transparent rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700'>
                  <NotificationBell />
                </button>
                <ImageDropdown imgSrc={AvatarSrc} classes={'relative ml-3'} />
              </div>
            </div>
            <div className='flex -mr-2 md:hidden'>
              <button className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white'>
                <svg
                  className='w-6 h-6'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    className='inline-flex'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                  <path
                    className='hidden'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M6 18L18 6M6 6l12 12'
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='hidden border-b border-gray-700 md:hidden'>
        <div className='px-2 py-3 sm:px-3'>
          <a
            href='/'
            className='block px-3 py-2 text-base font-medium text-white transition duration-150 ease-in-out bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700'
          >
            Dashboard
          </a>
          <a
            href='/'
            className='block px-3 py-2 mt-1 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
          >
            Team
          </a>
          <a
            href='/'
            className='block px-3 py-2 mt-1 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
          >
            Projects
          </a>
          <a
            href='/'
            className='block px-3 py-2 mt-1 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
          >
            Calendar
          </a>
          <a
            href='/'
            className='block px-3 py-2 mt-1 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
          >
            Reports
          </a>
        </div>
        <div className='pt-4 pb-3 border-t border-gray-700'>
          <div className='flex items-center px-5 sm:px-6'>
            <div className='flex-shrink-0'>
              <img
                className='w-10 h-10 rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
                alt=''
              />
            </div>
            <div className='ml-3'>
              <div className='text-base font-medium leading-none text-white'>
                Tom Cook
              </div>
              <div className='mt-1 text-sm font-medium leading-none text-gray-400'>
                tom@example.com
              </div>
            </div>
          </div>
          <div className='px-2 mt-3 sm:px-3'>
            <a
              href='/'
              className='block px-3 py-2 text-base font-medium text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
            >
              Your Profile
            </a>
            <a
              href='/'
              className='block px-3 py-2 mt-1 text-base font-medium text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
            >
              Settings
            </a>
            <a
              href='/'
              className='block px-3 py-2 mt-1 text-base font-medium text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
            >
              Sign out
            </a>
          </div>
        </div>
      </div> */}
    </nav>
  );
};

export { NavBar };
