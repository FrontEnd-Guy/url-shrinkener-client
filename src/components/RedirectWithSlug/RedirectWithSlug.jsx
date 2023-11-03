import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../utils/constants';

const RedirectWithSlug = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.location.href = API_BASE_URL + slug;
  }, [slug]);

  return <div className="loading-screen">Redirecting...</div>;
};

export default RedirectWithSlug;
