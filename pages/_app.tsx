import React, { useState } from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../components/definition';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    // Wrap all the pages in your app with a common parent element
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;