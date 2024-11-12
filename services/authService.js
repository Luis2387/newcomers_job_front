import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:8000/api';


const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (!refreshToken) {
          throw new Error('No refresh token available');
        }

        const response = await axios.post(`${API_URL}/token/refresh/`, { refresh: refreshToken });
        const newAccessToken = response.data.access;
        const newRefreshToken = response.data.refresh;
        localStorage.setItem('access_token', newAccessToken);
        if (newRefreshToken) {
          localStorage.setItem('refresh_token', newRefreshToken);
        }
        Cookies.set('access_token', newAccessToken, { path: '/' });

        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Error refreshing the token', refreshError);

        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        Cookies.remove('access_token');

        window.location.href = '/';
        throw refreshError;
      }
    }
    return Promise.reject(error);
  }
);


const authService = {
  

  loginUser: async (formData) => {
    const response = await axios.post(`${API_URL}/token/`, formData);
    return response.data; 
  },
  
  userTypeProfile: async (accessToken) => {
    const response = await axios.get(`${API_URL}/userTypeProfile/`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return response.data;
  },
  
  registerUser: async (formData) => {
    const response = await axios.post(`${API_URL}/register/`, formData);
    return response.data;  
  },

  isAuthenticated: () => {
    const accessToken = localStorage.getItem('access_token');
    return !!accessToken;
  },
  
  getUserType: () => {
    return localStorage.getItem('user_type');
  }


};

export { axiosInstance };
export default authService;
