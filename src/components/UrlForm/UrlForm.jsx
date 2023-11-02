/**
 * UrlForm Component: A form to add or update URLs.
 */

import React, { useState, useContext } from 'react';
import { UrlContext } from '../../context/UrlContext';
import { validateUrl, validateSlug } from '../../utils/validation';

import './UrlForm.scss';

const UrlForm = () => {
  const [urlValue, setUrlValue] = useState('');
  const [slugValue, setSlugValue] = useState('');
  const [urlError, setUrlError] = useState('');
  const [slugError, setSlugError] = useState('');

  const { handleCreateOrUpdateUrl, urls } = useContext(UrlContext);

  const handleUrlChange = (e) => {
    const newUrl = e.target.value;
    setUrlValue(newUrl);
    setUrlError(validateUrl(newUrl));
  };

  const handleSlugChange = (e) => {
    const newSlug = e.target.value;
    setSlugValue(newSlug);
    setSlugError(validateSlug(newSlug));
  };

  const handleShrink = (e) => {
    e.preventDefault();
    const existingUrl = urls.find((url) => url?.fullUrl === urlValue);
    handleCreateOrUpdateUrl(existingUrl, urlValue, slugValue);
  };

  const isFormValid = !urlError && !slugError && urlValue && slugValue;

  return (
    <form onSubmit={handleShrink}>
      <label htmlFor="urlInput">
        <input
          className={`url-input ${urlError ? 'error' : ''}`}
          id="urlInput"
          placeholder="URL"
          value={urlValue}
          onChange={handleUrlChange}
        />
        {urlError && <span className="error-message">{urlError}</span>}
      </label>

      <label htmlFor="slugInput">
        <input
          className={`url-input ${slugError ? 'error' : ''}`}
          id="slugInput"
          placeholder="Slug"
          value={slugValue}
          onChange={handleSlugChange}
        />

        {slugError && <span className="error-message">{slugError}</span>}
      </label>

      <button onClick={handleShrink} disabled={!isFormValid}>
        Shrink
      </button>
    </form>
  );
};

export default UrlForm;
