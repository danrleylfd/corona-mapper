import React from 'react';

import Routes from './src/routes';
import mapScheme from './src/services/mapScheme.json';

export default function App() {
  return (
    <Routes mapScheme={mapScheme} />
  );
}

