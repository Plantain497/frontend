import { Navigation } from '@shopify/polaris';
import React, { FunctionComponent } from 'react';
import { INavItem } from '../../types';

interface ISideNav {
  items: INavItem[];
}

const SideNav: FunctionComponent<ISideNav> = ({ items }): JSX.Element => {
  return (
    <Navigation location='/'>
      <Navigation.Section items={items} />
    </Navigation>
  );
};

export { SideNav };
