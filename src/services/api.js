import axios from 'axios';
import { BASE_API_URL } from 'utils/consts';

export const $auth = axios.create({
  baseURL: BASE_API_URL,
});

export const $api = axios.create({
  baseURL: BASE_API_URL,
});

$auth.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('access')}`;
  return config;
});

// $api.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response.status == 401 &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         const response = await axios.post(`${BASE_API_URL}/refresh/`, {
//           refresh: localStorage.getItem('refresh'),
//         });
//         localStorage.setItem('token', response.data.accessToken);
//         return $api.request(originalRequest);
//       } catch (e) {
//         console.log('НЕ АВТОРИЗОВАН');
//       }
//     }
//     throw error;
//   }
// );
