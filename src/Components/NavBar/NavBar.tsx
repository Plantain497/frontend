import { ActionList, Card, TopBar } from '@shopify/polaris';
import { LogOutMinor } from '@shopify/polaris-icons';
import React, { FunctionComponent, useCallback, useState } from 'react';

interface INavBar {
  username?: string;
  initial?: string;
  detail?: string;
}

const NavBar: FunctionComponent<INavBar> = ({ username, initial, detail }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  // null coalescing
  // if username exists, name = username
  // else, name = ''
  const name: string = username ?? '';
  const init: string = initial ?? '';
  const details: string = detail ?? '';

  const toggleIsUserMenuOpen = useCallback(() => setIsUserMenuOpen(isUserMenuOpen => !isUserMenuOpen), []);

  const handleSearchResultsDismiss = useCallback(() => {
    setIsSearchActive(false);
    setSearchValue('');
  }, []);

  const handleSearchChange = useCallback(value => {
    setSearchValue(value);
    setIsSearchActive(value.length > 0);
  }, []);

  const handleNavigationToggle = useCallback(() => {
    console.log('toggle navigation visibility');
  }, []);

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: 'Logout', icon: LogOutMinor }]
        }
      ]}
      name={name}
      detail={details}
      initials={init}
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );

  const searchResultsMarkup: JSX.Element = (
    <Card>
      <ActionList items={[{ content: 'Logout', icon: LogOutMinor }]} />
    </Card>
  );

  const searchFieldMarkup: JSX.Element = (
    <TopBar.SearchField onChange={handleSearchChange} value={searchValue} placeholder='Search' />
  );

  return (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchResultsVisible={isSearchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={handleNavigationToggle}
    />
  );
};

export { NavBar };
