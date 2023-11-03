/**
 * API Service: A service to handle API requests.
 */

import axios from 'axios';

import { API_BASE_URL } from '../utils/constants';

export const fetchUrls = async (page = 1, limit = 10) => {
  const response = await fetch(`${API_BASE_URL}?page=${page}&limit=${limit}`);
  const data = await response.json();
  return data;
};

export const createUrl = async (urlValue, slugValue) => {
    const response = await axios.post(API_BASE_URL, {
      fullUrl: urlValue,
      slug: slugValue,
    });
    return response.data;
};

export const editUrl = async (originalSlug, newFullUrl, newSlug) => {
  const response = await axios.patch(`${API_BASE_URL}${originalSlug}`, { newFullUrl, newSlug });
  return response.data;
};

export const deleteUrl = async (slug) => {
  const response = await axios.delete(`${API_BASE_URL}${slug}`);
  return response.data;
};
