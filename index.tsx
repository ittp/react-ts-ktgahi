import * as React from 'react';
import { Fragment, useEffect, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Fragment key={'0123'}>
    <App />
  </Fragment>
);
