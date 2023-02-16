import React, { useState } from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../components/definition';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <Component {...pageProps} />
  );
};

export default App;