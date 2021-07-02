import Checkbox from 'antd/lib/checkbox/Checkbox';
import axios from 'axios';
import { BASE_API_URL } from 'utils/consts';

const $api = axios.create({
  baseURL: 'http://localhost:8000',
});

export default $api;
