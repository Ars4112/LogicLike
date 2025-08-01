import axios from 'axios';

const API_BASE_URL = 'https://logiclike.com/docs';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchCourses = async () => {
  try {
    const response = await api.get('/courses.json');
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};