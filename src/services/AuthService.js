import axios from 'axios';
import { BASE_API_URL } from 'utils/consts';
import { $api, $auth } from './api';

export default class AuthService {
  static async login(email, password) {
    return $auth.post('/login/', { email, password });
  }

  static async registration(newUser) {
    return $api.post('/register/', newUser);
  }

  static async refresh(refresh) {
    return axios.post(`${BASE_API_URL}/refresh/`, {
      refresh,
    });
  }
}
