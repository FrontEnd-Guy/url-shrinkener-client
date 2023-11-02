/**
 * UrlList Component: Displays a list of URLs.
 */

import React, { useContext } from 'react';
import UrlRow from './UrlRow';
import { UrlContext } from '../../context/UrlContext';
import Pagination from '../Pagination/Pagination';

import './UrlList.scss';

const UrlList = () => {
  const { urls, handleEditUrl, handleDeleteUrl, currentPage, totalPages, loadUrls } =
    useContext(UrlContext);

  return (
    <>
      <h2>My Urls:</h2>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Full URL</th>
              <th>Short URL</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url) => (
              <UrlRow
                key={url.slug}
                url={url}
                handleEdit={handleEditUrl}
                handleDelete={handleDeleteUrl}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => loadUrls(page)}
      />
    </>
  );
};

export default UrlList;
