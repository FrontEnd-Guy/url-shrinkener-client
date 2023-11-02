const urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}[-a-zA-Z0-9@:%_+.~#?&//=]*$/;
const slugRegex = /^[A-Za-z0-9_-]+$/;

const validateUrl = (url) => {
  if (!url) {
    return 'URL is required';
  }
  if (!urlRegex.test(url)) {
    return 'Invalid URL format';
  }
  return null;
};

const validateSlug = (slug) => {
  if (!slug) {
    return 'Slug is required';
  }
  if (slug.length > 10) {
    return 'Slug must be 10 characters or less';
  }
  if (!slugRegex.test(slug)) {
    return 'Invalid slug format';
  }
  return null;
};

export { validateUrl, validateSlug };
