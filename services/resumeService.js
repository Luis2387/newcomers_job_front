import { axiosInstance } from "@/services/authService";

const ResumeService = {
  getResume: async (id = null) => {
    const endpoint = id ? `/resume/${id}/` : `/resume/`;
    const response = await axiosInstance.get(endpoint);
    return response.data;
  },

  updateResume: async (id, data) => {
    const response = await axiosInstance.put(`/resume/`, data);
    return response.data;
  },
};

export default ResumeService;
