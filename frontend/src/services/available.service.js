import axios from "axios";

export const getAllAvailableDates = async () => {
  const url = `/available`;
  const response = await axios.get(url);
  return response.data;
};

export const getAvailableDatesByProfessional = async (professionalId) => {
  const url = `/available/${professionalId}`;
  const response = await axios.get(url);
  return response.data;
};