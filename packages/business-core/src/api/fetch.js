import { API_BASE_URL, API_PREFIX } from '../constants/api.const.js';

/**
 * 构建带查询参数的 URL
 * @param {string} url - 基础 URL
 * @param {Object} params - 查询参数
 * @returns {string} 完整的 URL
 */
const buildUrl = (url, params = {}) => {
  const fullUrl = new URL(`${API_BASE_URL}${API_PREFIX}${url}`, window.location.origin);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      fullUrl.searchParams.append(key, String(value));
    }
  });
  return fullUrl.toString();
};

export default {
  get: async (url, params = {}, options = {}) => {
    const response = await fetch(buildUrl(url, params), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },
  post: async (url, data = {}, options = {}) => {
    const response = await fetch(`${API_BASE_URL}${API_PREFIX}${url}`, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },
  put: async (url, data = {}, options = {}) => {
    const response = await fetch(`${API_BASE_URL}${API_PREFIX}${url}`, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },
  delete: async (url, options = {}) => {
    const response = await fetch(`${API_BASE_URL}${API_PREFIX}${url}`, {
      method: 'DELETE',
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },
};
