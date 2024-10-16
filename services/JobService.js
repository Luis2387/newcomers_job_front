import axios from 'axios';

const API_URL = "http://localhost:8000/api";

const getAuthHeaders = () => {
  const token = localStorage.getItem('access_token');
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

const getSkills = async () => {
  const response = await axios.get(`${API_URL}/skills/`,getAuthHeaders());
  return response.data;
};

const getCategories = async () => {
  const response = await axios.get(`${API_URL}/categories/`,getAuthHeaders());
  return response.data;
};

const getJobTypes = async () => {
  const response = await axios.get(`${API_URL}/job-types/`,getAuthHeaders());
  return response.data;
};

const getEducationLevels = async () => {
  const response = await axios.get(`${API_URL}/education-levels/`,getAuthHeaders());
  return response.data;
};

const createJob = async (jobData) => {
  const response = await axios.post(
    `${API_URL}/create-job/`,
    jobData,
    getAuthHeaders()
  );
  return response.data;
};

const getEmployerJobs = async () => {
  const response = await axios.get(`${API_URL}/employer-jobs/`, getAuthHeaders());
  return response.data;
};


const deleteJob = async (jobId) => {
  try {
    const response = await axios.delete(`${API_URL}/delete-job/${jobId}/`, getAuthHeaders());
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
};

