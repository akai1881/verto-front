import { $api, $auth } from './api';

export default class AuthService {
  static async login(email, password) {
    return $auth.post('/login/', { email, password });
  }

  static async registration(newUser) {
    return $api.post('/register/', newUser);
  }
}
