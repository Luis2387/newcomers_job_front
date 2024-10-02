import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register/`, formData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};


const loginUser = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/token/`, formData);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};


export default {
  registerUser,
  loginUser,
};


