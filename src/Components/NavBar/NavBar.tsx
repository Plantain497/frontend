import React, { FunctionComponent, ReactElement, useState } from 'react';
import { useAuth } from '../Auth';
import { Hamburger, LargeNavButton, SmallNavButton } from '../Buttons';
import { AppContainer } from '../Containers';
import { ImageDropdown } from '../Dropdown';
import { ReactComponent as Logo } from './Logo.svg';
import { ReactComponent as LogoFull } from './LogoFull.svg';
import { Notifications } from './Notifications';

const NavBar: FunctionComponent = (): ReactElement => {
  const [selected, setSelected] = useState<string>('Dashboard');
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const { userObject, signOut } = useAuth();

  return (
    <nav className='bg-gray-800'>
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
              <Logo className='block w-auto h-8 lg:hidden' />
              <LogoFull className='hidden w-auto h-8 lg:block' />
            </div>

            {/* Large Menu */}

            <div className='hidden sm:block sm:ml-6'>
              <div className='flex'>
                <LargeNavButton
                  itemName='Dashboard'
                  currentSelectedItem={selected}
                  setSelectedItem={setSelected}
                />
                <LargeNavButton
                  itemName='Team'
                  classes='ml-4'
                  currentSelectedItem={selected}
                  setSelectedItem={setSelected}
                />
                <LargeNavButton
                  itemName='Projects'
                  classes='ml-4'
                  currentSelectedItem={selected}
                  setSelectedItem={setSelected}
                />
                <LargeNavButton
                  itemName='Calendar'
                  classes='ml-4'
                  currentSelectedItem={selected}
                  setSelectedItem={setSelected}
                />
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <Notifications
              classes={'relative ml-3'}
              dropdownElements={[{ label: 'React Scheduler Overdue' }]}
            />
            <ImageDropdown
              imgSrc={userObject?.imageUrl}
              imgClasses={'w-8 h-8 rounded-full'}
              classes={'relative ml-3'}
              dropdownElements={[
                { label: 'Your Profile' },
                { label: 'Settings' },
                { label: 'Sign Out', onClick: signOut },
              ]}
            />
          </div>
        </div>

        {/* Small Menu */}

        <div className='sm:hidden'>
          {hamburgerOpen && (
            <div className='px-2 pt-2 pb-3'>
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
            </div>
          )}
        </div>
      </AppContainer>
    </nav>
  );
};

export { NavBar };
