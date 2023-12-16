const userTag = 'appointmentCareUserData';

export const saveUser = (data) => {
    window.localStorage.setItem(
        userTag, JSON.stringify(data)
    );
};

export const getUser = () => {
    const userJSON = window.localStorage.getItem(userTag);
    if (userJSON) {
        console.log("He leido al usuario")
        return JSON.parse(userJSON);
    }
    return null;
};

export const logout = () => {
    window.localStorage.removeItem(userTag);
}