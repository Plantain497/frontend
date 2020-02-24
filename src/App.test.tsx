import { Page } from '@shopify/polaris';
import React from 'react';
import App from './App';
import { mount } from './tests/utils/react-testing';

// Sample test to demonstrate how you should test with react-testing & Polaris
test('renders page', () => {
  const wrapper = mount(<App />);
  expect(wrapper).toContainReactComponent(Page);
});
