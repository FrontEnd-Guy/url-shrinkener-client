/**
 * UrlContext: Provides a context for URL data.
 */

import React, { createContext } from 'react';
import { useUrls } from '../hooks/useUrls';

export const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
  const urlData = useUrls();

  return <UrlContext.Provider value={urlData}>{children}</UrlContext.Provider>;
};
