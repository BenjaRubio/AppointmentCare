import axios from 'axios';


export const sendLogin = async(loginData) => {
    const url = '/login';
    const response = await axios.post(url, loginData);
    return response.data;
};

export const sendRegistration = async(registrationData) => {
    // const url = `${API_URL}/register`;
    const url = '/register';
    const response = await axios.post(url, registrationData);
    return response.data;
};