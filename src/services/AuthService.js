import $api from './api';

export default class AuthService {
  static async login(email, password) {
    return $api.post('/login/', { email, password });
  }

  static async registration(newUser) {
    return $api.post('/register/', newUser);
  }
}
