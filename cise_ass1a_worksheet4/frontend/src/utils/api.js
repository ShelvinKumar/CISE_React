import axios from 'axios';
require('dotenv').config({ path: 'ENV_FILENAME' });

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;