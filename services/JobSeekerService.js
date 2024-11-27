import axios from "axios";
import { axiosInstance } from "@/services/authService";
const API_BASE_URL = "http://localhost:8000/api";

const getProfile = async (id = null) => {
  const endpoint = id ? `/candidate-profile/${id}/` : `/candidate-profile/`;
  const response = id
    ? await axios.get(`${API_BASE_URL}${endpoint}`) // Sin autenticación
    : await axiosInstance.get(endpoint); // Con autenticación
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
