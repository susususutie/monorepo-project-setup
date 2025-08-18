
import { API_BASE_URL, API_PREFIX } from "../constants/api.const";

export default {
  get: async (url, params={}, options = {}) => {
    const response = await fetch(`${API_BASE_URL}${API_PREFIX}${url}`, {
      method: 'GET',
      ...options,
      body: params ? JSON.stringify(params) : undefined,
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
  post: async (url, data={},options = {}) => {
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
  }

}