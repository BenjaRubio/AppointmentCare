import axios from 'axios';

export const getProfessionalById = async(professionalId) => {
    const url = `/professional/${professionalId}`;
    const response = await axios.get(url);
    return response.data;
};

export const sendAvailableDate = async(availableDateData) => {
    const url = `/professional/availableDate`;
    const response = await axios.post(url, availableDateData);
    return response.data;
}