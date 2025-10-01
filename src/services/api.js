/**
 * API Service for communicating with Strapi CMS Backend
 */

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:1337/api';

/**
 * Generic fetch function with error handling
 */
const fetchFromAPI = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Fetch Error:', error);
    throw error;
  }
};

/**
 * Transform Strapi image URL to full URL
 */
export const getStrapiImageUrl = (imageData) => {
  if (!imageData) return null;
  
  const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:1337';
  
  // Handle both old and new Strapi formats
  if (imageData.data?.attributes?.url) {
    return `${baseUrl}${imageData.data.attributes.url}`;
  } else if (imageData.url) {
    return `${baseUrl}${imageData.url}`;
  }
  
  return null;
};

/**
 * Fetch all cases
 */
export const getCases = async () => {
  try {
    const data = await fetchFromAPI('/cases?populate=*&sort=order:asc');
    return data.data || [];
  } catch (error) {
    console.error('Error fetching cases:', error);
    return [];
  }
};

/**
 * Fetch a single case by slug
 */
export const getCaseBySlug = async (slug) => {
  try {
    const data = await fetchFromAPI(`/cases?filters[slug][$eq]=${slug}&populate=*`);
    return data.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching case:', error);
    return null;
  }
};

/**
 * Fetch all blog posts
 */
export const getBlogs = async (limit = null) => {
  try {
    let endpoint = '/blogs?populate=*&sort=publishDate:desc';
    if (limit) {
      endpoint += `&pagination[limit]=${limit}`;
    }
    const data = await fetchFromAPI(endpoint);
    return data.data || [];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

/**
 * Fetch a single blog post by slug
 */
export const getBlogBySlug = async (slug) => {
  try {
    const data = await fetchFromAPI(`/blogs?filters[slug][$eq]=${slug}&populate=*`);
    return data.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
};

const api = {
  getCases,
  getCaseBySlug,
  getBlogs,
  getBlogBySlug,
  getStrapiImageUrl,
};

export default api;

