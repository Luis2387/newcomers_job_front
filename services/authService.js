import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

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
  }
};

export default authService;

