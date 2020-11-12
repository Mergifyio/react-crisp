import React from 'react';
import { render } from '@testing-library/react';

import Crisp from '../src/Crisp';

test('Crisp load', () => {
  render(
    <Crisp crispWebsiteId="foo-website-id" />,
  );

  expect(window.$crisp).toBeDefined();
  expect(document.querySelector('.crisp-client')).toBeDefined();
  expect(window.CRISP_WEBSITE_ID).toMatch(/foo-website-id/);
});

test('Crisp with a token ID', () => {
  render(
    <Crisp
      crispWebsiteId="foo-website-id"
      crispTokenId="foo-token-id"
    />,
  );

  expect(window.CRISP_TOKEN_ID).toMatch(/foo-token-id/);
});

test('Crisp with a Runtime Config', () => {
  const runtimeConfig = { session_merge: true };
  render(
    <Crisp
      crispWebsiteId="foo-website-id"
      crispRuntimeConfig={runtimeConfig}
    />,
  );

  expect(window.CRISP_RUNTIME_CONFIG === runtimeConfig).toBeTruthy();
});

test('Crisp with Attributes', () => {
  const attributes = { 'user:email': 'foo@bar.com' };
  render(
    <Crisp
      crispWebsiteId="foo-website-id"
      attributes={attributes}
    />,
  );

  window.CRISP_READY_TRIGGER = () => {
    expect(window.$crisp.get('user:email') === attributes['user:email']).toBeTruthy();
  };
});

test('Crisp with custom Configuration', () => {
  const configuration = { 'position:reverse': true };
  render(
    <Crisp
      crispWebsiteId="foo-website-id"
      configuration={configuration}
    />,
  );

  window.CRISP_READY_TRIGGER = () => {
    expect(window.$crisp.get('position:reverse') === configuration['position:reverse']).toBeTruthy();
  };
});
