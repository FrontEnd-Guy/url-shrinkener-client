/**
 * App Component: The root component of the application.
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UrlProvider } from './context/UrlContext';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import RedirectWithSlug from './components/RedirectWithSlug/RedirectWithSlug';
import './App.scss';
import NotFound from './components/NotFound/NotFound';

const App = () => (
  <UrlProvider>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='s/:slug' element={<RedirectWithSlug />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  </UrlProvider>
);

export default App;
