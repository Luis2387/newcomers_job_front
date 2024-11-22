import { axiosInstance } from '@/services/authService';

const ResumeService = {
  getResume: async () => {
    const response = await axiosInstance.get('/resume/');
    return response.data;
  },

  updateResume: async (id, data) => {
    const response = await axiosInstance.put(`/resume/`, data);
    return response.data;
  },
};

export default ResumeService;
