import myFetch from './fetch'
import { API_ENDPOINTS} from '../constants/api.const.js'

export function getPosts(params) {
  return myFetch.get(API_ENDPOINTS.posts, params)
    .catch(error => {
      console.error('Error fetching post data:', error);
      throw error;
    });
}

export function createPost(data) {
  return myFetch.post(API_ENDPOINTS.createPost, data)
    .catch(error => {
      console.error('Error creating post:', error);
      throw error;
    });
}

export function updatePost(id, data) {
  return myFetch.put(`${API_ENDPOINTS.updatePost}/${id}`, data)
    .catch(error => {
      console.error('Error updating post:', error);
      throw error;
    });
}