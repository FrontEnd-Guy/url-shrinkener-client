/**
 * Main Component: Represents the main section of the application.
 */

import React, { useContext } from 'react';
import { UrlContext } from '../../context/UrlContext';
import UrlForm from '../UrlForm/UrlForm';
import UrlList from '../UrlList/UrlList';
import Notification from '../Notification/Notification';
import { API_BASE_URL } from '../../utils/constants';

const Main = () => {
  const { urls, error, result } = useContext(UrlContext);
  return (
    <main>
      {error && <Notification message={error} type="error" />}
      {result && (
        <>
          <Notification
            message={`URL successfully created or updated: ${API_BASE_URL + result}`}
            type="success"
          />{' '}
        </>
      )}
      <UrlForm />
      {urls.length > 0 && <UrlList />}
    </main>
  );
};

export default Main;
