import axios from 'axios';
import { axiosInstance } from '@/services/authService';

const getProfile = async () => {
  const response = await axiosInstance.get(`/candidate-profile/`);
  return response.data;
};

const updateProfile = async (data) => {
  const response = await axiosInstance.put(`/candidate-profile/`, data);
  return response.data;
};

export default {
  getProfile,
  updateProfile,
};
