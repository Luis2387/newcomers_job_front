import axios from 'axios';
import { axiosInstance } from '@/services/authService';

const API_URL = "http://localhost:8000/api";

const getSkills = async () => {
  const response = await axiosInstance.get(`/skills/`);
  return response.data;
};

const getCategories = async () => {
  const response = await axiosInstance.get(`/categories/`);
  return response.data;
};

const getJobTypes = async () => {
  const response = await axiosInstance.get(`/job-types/`);
  return response.data;
};

const getEducationLevels = async () => {
  const response = await axiosInstance.get(`/education-levels/`);
  return response.data;
};

const getJob = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/job/${id}/`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`Error in getJob (Status: ${error.response.status}):`, error.response.data);
    } else {
      console.error("Error in getJob:", error.message);
    }
    throw error;
  }
};

const createJob = async (jobData) => {
  const response = await axiosInstance.post(`/create-job/`,jobData);
  return response.data;
};

const updateJob = async (id, jobData) => {
    try {
      const response = await axiosInstance.put(`/edit-job/${id}/`, jobData);
      return response.data;
    } catch (error) {
      console.error('Error updating job');
      throw error;
    }
};

const getEmployerJobs = async () => {
  const response = await axiosInstance.get(`/employer-jobs/`);
  return response.data;
};


const deleteJob = async (jobId) => {
  try {
    const response = await axiosInstance.delete(`/delete-job/${jobId}/`);
    return response.data;
  } catch (error) {
      console.error("Error deleting job:", error);
    throw error;
  }
};


const searchJobs = async (searchTerm) => {
  const response = await axios.get(`${API_URL}/search-jobs/`, {
    params: {
      q: searchTerm,
    }
  });
  return response.data;
};


export default {
  getSkills,
  getCategories,
  getJobTypes,
  getEducationLevels,
  createJob,
  getEmployerJobs,
  deleteJob,
  searchJobs,
  updateJob,
  getJob,
};

