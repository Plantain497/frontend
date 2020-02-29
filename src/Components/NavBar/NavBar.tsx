import React, { FunctionComponent, ReactElement, useState } from 'react';
import AvatarSrc from './Avatar.jpg';
import { Hamburger } from './Hamburger';
import { ImageDropdown } from './ImageDropdown';
import { ReactComponent as Logo } from './Logo.svg';
import {
  LargeNavButton,
  SmallNavButton,
  SmallSettingsButton,
} from './NavButton';
import { ReactComponent as NotificationBell } from './NotificationBell.svg';

const NavBar: FunctionComponent = (): ReactElement => {
  const [selected, setSelected] = useState<string>('Dashboard');
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  return (
    <nav className='bg-gray-800'>
      {/* Proper Menu */}

      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='border-b border-gray-700'>
          <div className='flex items-center justify-between h-16 px-4 sm:px-0'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <Logo className='w-8 h-8' />
              </div>
              <div className='hidden md:block'>
                <div className='flex items-baseline ml-10'>
                  <LargeNavButton
                    itemName={'Dashboard'}
                    currentSelectedItem={selected}
                    setSelectedItem={setSelected}
                  />
                  <LargeNavButton
                    classes='ml-4'
                    itemName={'Team'}
                    currentSelectedItem={selected}
                    setSelectedItem={setSelected}
                  />
                  <LargeNavButton
                    classes='ml-4'
                    itemName={'Projects'}
                    currentSelectedItem={selected}
                    setSelectedItem={setSelected}
                  />
                  <LargeNavButton
                    classes='ml-4'
                    itemName={'Calendar'}
                    currentSelectedItem={selected}
                    setSelectedItem={setSelected}
                  />
                  <LargeNavButton
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
                <ImageDropdown
                  imgSrc={AvatarSrc}
                  imgClasses={'w-8 h-8 rounded-full'}
                  classes={'relative ml-3'}
                  dropdownElements={[
                    { label: 'Your Profile' },
                    { label: 'Settings' },
                    { label: 'Sign Out' },
                  ]}
                />
              </div>
            </div>
            <div className='flex -mr-2 md:hidden'>
              <button
                className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white'
                onClick={() => setHamburgerOpen(!hamburgerOpen)}
              >
                <Hamburger isOpen={hamburgerOpen} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Small Menu */}
      {hamburgerOpen && (
        <div className={'border-b border-gray-700 md:hidden'}>
          <div className='px-2 py-3 sm:px-3'>
            <SmallNavButton
              itemName={'Dashboard'}
              currentSelectedItem={selected}
              setSelectedItem={setSelected}
            />
            <SmallNavButton
              classes='mt-1'
              itemName={'Team'}
              currentSelectedItem={selected}
              setSelectedItem={setSelected}
            />
            <SmallNavButton
              classes='mt-1'
              itemName={'Projects'}
              currentSelectedItem={selected}
              setSelectedItem={setSelected}
            />
            <SmallNavButton
              classes='mt-1'
              itemName={'Calendar'}
              currentSelectedItem={selected}
              setSelectedItem={setSelected}
            />
            <SmallNavButton
              classes='mt-1'
              itemName={'Reports'}
              currentSelectedItem={selected}
              setSelectedItem={setSelected}
            />
          </div>
          <div className='pt-4 pb-3 border-t border-gray-700'>
            <div className='flex items-center px-5 sm:px-6'>
              <div className='flex-shrink-0'>
                <img
                  className='w-10 h-10 rounded-full'
                  src={AvatarSrc}
                  alt='Profile'
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
              <SmallSettingsButton name={'Your Profile'} />
              <SmallSettingsButton name={'Settings'} classes='mt-1' />
              <SmallSettingsButton name={'Sign out'} classes='mt-1' />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export { NavBar };
