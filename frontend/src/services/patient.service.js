import axios from 'axios';

export const getPatientById = async(patientId) => {
    const url = `/patient/${patientId}`;
    const response = await axios.get(url);
    return response.data;
};

export const getPatientAppointments = async(patientId) => {
    const url = `/patient/${patientId}/appointment`;
    const response = await axios.get(url);
    return response.data;
};

export const createAppointment = async(appointmentData) => {
    const url = `/patient/appointment`;
    const response = await axios.post(url, appointmentData);
    return response.data;
};