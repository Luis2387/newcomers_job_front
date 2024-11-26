import axios from 'axios';
import { axiosInstance } from '@/services/authService';

const getProfile = async (id) => {
  const endpoint = id
    ? `/candidate-profile/${id}/`
    : `/candidate-profile/`;
  const response = await axiosInstance.get(endpoint);
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
