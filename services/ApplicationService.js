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

const getJobApplicants = async (jobId) => {
  try {
    const response = await axiosInstance.get(`/job-applicants/${jobId}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching applicants for job ID ${jobId}:`, error);
    throw error;
  }
};

const updateApplicationStatus = async (applicationId, status) => {
  try {
    const response = await axiosInstance.patch(`/applications/${applicationId}/`, {
      status: status,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating application status:", error);
    throw error;
  }
};


const createApplication = async (applicationData) => {
  try {
    const response = await axiosInstance.post(`/apply/`, applicationData);
    return response.data;
  } catch (error) {
    console.error("Error creating application:", error);
    throw error;
  }
};


export default {
  getApplications,
  getJobApplicants,
  updateApplicationStatus,
  createApplication,
};
