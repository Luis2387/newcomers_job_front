import axios from "axios";
import { axiosInstance } from "@/services/authService";
const API_BASE_URL = "http://localhost:8000/api";

const getResume = async (id = null) => {
  const endpoint = id ? `/resume/${id}/` : `/resume/`;
  const response = id
    ? await axios.get(`${API_BASE_URL}${endpoint}`) // Sin autenticación
    : await axiosInstance.get(endpoint); // Con autenticación
  return response.data;
};

const updateResume = async (data) => {
  const response = await axiosInstance.put(`/resume/`, data);
  return response.data;
};

export default {
  getResume,
  updateResume,
};
