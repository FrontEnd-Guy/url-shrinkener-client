/**
 * useUrls Hook: Manages state and provides functions for URL data.
 */

import { useState, useEffect, useCallback } from 'react';
import { fetchUrls, createUrl, editUrl, deleteUrl } from '../api';

export const useUrls = () => {
  const [urls, setUrls] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState('');

  const loadUrls = useCallback(async (page = 1, limit = 10) => {
    try {
      setIsLoading(true);
      const fetchedUrls = await fetchUrls(page, limit);
      setUrls(fetchedUrls.urls);
      setCurrentPage(fetchedUrls.currentPage);
      setTotalPages(fetchedUrls.totalPages);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUrls();
  }, [loadUrls]);

  const handleCreateOrUpdateUrl = async (existingUrl, urlValue, slugValue) => {
    try {
      setError('');
      setResult('');
      setIsLoading(true);
      if (!existingUrl) {
        const result = await createUrl(urlValue, slugValue);
        console.log(result); 
        setResult(result.slug);
      } else {
        const slug = existingUrl.slug
        const result = await editUrl(slug, urlValue, slugValue)
        setResult(result.slug);
      }
      await loadUrls();
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError(error.message);
        }
      
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditUrl = async (originalSlug, newFullUrl, newSlug) => {
    try {
      setIsLoading(true);
      setError('');
      setResult('');
      const result = await editUrl(originalSlug, newFullUrl, newSlug);
      await loadUrls();
      setResult(result.slug);
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError(error.message);
        }
      
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteUrl = async (slug) => {
    try {
      setIsLoading(true);
      setError('');
      setResult('');
      await deleteUrl(slug);
      await loadUrls();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    urls,
    isLoading,
    error,
    setError,
    result,
    setResult,
    loadUrls,
    handleCreateOrUpdateUrl,
    handleEditUrl,
    handleDeleteUrl,
    currentPage,
    totalPages,
  };
};
