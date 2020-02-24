import { ThemeConfig } from '@shopify/polaris/types/utilities/theme';

const theme: ThemeConfig = {
  colors: {
    topBar: {
      background: '#FFC555'
    }
  },
  logo: {
    width: 128,
    topBarSource: 'https://plantain.s3.us-east-2.amazonaws.com/logo.svg',
    url: '/',
    accessibilityLabel: 'Plantain'
  }
};

export { theme };
