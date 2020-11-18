import React from 'react';
import { render, waitFor } from '@testing-library/react';

import Crisp from '../src/Crisp';

test('Crisp load', async () => {
  await render(
    <Crisp crispWebsiteId="foo-website-id" />,
  );

  await waitFor(() => expect(global.$crisp).toBeDefined());
  await waitFor(() => expect(document.querySelector('.crisp-client')).toBeDefined());
  await waitFor(() => expect(global.CRISP_WEBSITE_ID).toMatch(/foo-website-id/));
});

test('Crisp with a token ID', async () => {
  const tokenId = 'foo-token-id';
  await render(
    <Crisp
      crispWebsiteId="foo-website-id"
      crispTokenId={tokenId}
    />,
  );

  await waitFor(() => expect(global.CRISP_TOKEN_ID).toMatch(/foo-token-id/));
});

test('Crisp with a Runtime Config', async () => {
  const runtimeConfig = { session_merge: true };

  await render(
    <Crisp
      crispWebsiteId="foo-website-id"
      crispRuntimeConfig={runtimeConfig}
    />,
  );

  await waitFor(() => expect(global.CRISP_RUNTIME_CONFIG.session_merge).toBeTruthy());
});
