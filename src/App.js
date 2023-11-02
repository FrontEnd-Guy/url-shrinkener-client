/**
 * App Component: The root component of the application.
 */

import React from 'react';
import { UrlProvider } from './context/UrlContext';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.scss';

const App = () => (
  <UrlProvider>
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  </UrlProvider>
);

export default App;
