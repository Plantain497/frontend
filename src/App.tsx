import { AppProvider, Frame } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import React, { FunctionComponent, ReactElement } from 'react';
import { NavBar } from './Components/NavBar';
import { SideNav } from './Components/SideNav';
import { theme } from './Utils';

import { items } from './Utils';

const App: FunctionComponent = (): ReactElement => {
  return (
    <AppProvider i18n={enTranslations} theme={theme}>
      <Frame
        topBar={<NavBar username={'Sally'} initial={'SH'} detail={'Plantain'} />}
        navigation={<SideNav items={items} />}
      >
        <h1>Content</h1>
      </Frame>
    </AppProvider>
  );
};

export { App };
