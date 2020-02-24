import { AppProvider, Frame } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import React, { FunctionComponent, ReactElement } from 'react';
import { theme } from './Utils';

const App: FunctionComponent = (): ReactElement => {
  return (
    <AppProvider i18n={enTranslations} theme={theme}>
      <Frame>
        <h1>Content</h1>
      </Frame>
    </AppProvider>
  );
};

export { App };
