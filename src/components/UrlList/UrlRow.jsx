/**
 * UrlRow Component: Represents a single row in the URL list.
 */

import React, { useState } from 'react';
import { API_BASE_URL } from '../../utils/constants';
import { validateUrl, validateSlug } from '../../utils/validation';

import { ReactComponent as EditIcon } from '../../assets/edit.svg';
import { ReactComponent as DeleteIcon } from '../../assets/delete.svg';
import { ReactComponent as SaveIcon } from '../../assets/save.svg';
import copyIcon from '../../assets/clipboard.png';
import checkedIcon from '../../assets/checked-clipboard.png';

const UrlRow = ({ url, handleEdit, handleDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editFullUrl, setEditFullUrl] = useState(url.fullUrl);
  const [editSlug, setEditSlug] = useState(url.slug);

  const [urlError, setUrlError] = useState('');
  const [slugError, setSlugError] = useState('');

  const [copied, setCopied] = useState(false);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    if (editFullUrl !== url.fullUrl || editSlug !== url.slug) {
      handleEdit(url.slug, editFullUrl, editSlug);
      setEditFullUrl(url.fullUrl);
      setEditSlug(url.slug);
    }
    toggleEditing();
  };

  const handleCopy = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error('Copy failed:', err));
  };

  const handleUrlChange = (e) => {
    const newUrl = e.target.value;
    setEditFullUrl(newUrl);
    const errorMessage = validateUrl(newUrl);
    setUrlError(errorMessage);
  };

  const handleSlugChange = (e) => {
    const newSlug = e.target.value;
    setEditSlug(newSlug);
    const errorMessage = validateSlug(newSlug);
    setSlugError(errorMessage);
  };

  const isFormValid = !urlError && !slugError && editFullUrl && editSlug;

  return (
    <tr>
      <td data-label="Full URL">
        {isEditing ? (
          <>
            <input
              className={`url-input ${urlError ? 'error' : ''}`}
              type="url"
              value={editFullUrl}
              onChange={handleUrlChange}
            />

            {urlError && <span className="error-message">{urlError}</span>}
          </>
        ) : (
          <a href={url.fullUrl} target="_blank" rel="noreferrer">
            {url.fullUrl}
          </a>
        )}
      </td>
      <td data-label="Short URL">
        {isEditing ? (
          <>
            <input
              className={`url-input ${slugError ? 'error' : ''}`}
              type="text"
              value={editSlug}
              onChange={handleSlugChange}
            />
            {slugError && <span className="error-message">{slugError}</span>}
          </>
        ) : (
          <a href={`${API_BASE_URL}${url.slug}`} target="_blank" rel="noreferrer">
            {url.slug}
          </a>
        )}
      </td>
      <td data-label="Actions" className="buttons-cell">
        {isEditing ? (
          <SaveIcon
            className={`url-action-btn ${!isFormValid ? 'hidden' : ''}`}
            onClick={handleSave}
          />
        ) : (
          <EditIcon className="url-action-btn" onClick={toggleEditing} />
        )}
        <img
          className="url-action-btn"
          src={copied ? checkedIcon : copyIcon}
          alt="Copy icon"
          onClick={() => handleCopy(`${API_BASE_URL + url.slug}`)}
        />
        <DeleteIcon className="url-action-btn" onClick={() => handleDelete(url.slug)} />
      </td>
    </tr>
  );
};

export default UrlRow;
