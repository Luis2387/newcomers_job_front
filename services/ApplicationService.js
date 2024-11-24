import axios from 'axios';
import { axiosInstance } from '@/services/authService';

const getApplications = async () => {
  try {
    const response = await axiosInstance.get(`/applications/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching applications:', error);
    throw error;
  }
};

export default {
  getApplications,
};
