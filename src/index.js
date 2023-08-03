import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const BUY_CAKE = 'BUY_CAKE';

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  };
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
