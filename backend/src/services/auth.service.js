const bcrypt = require('bcrypt');

const checkPassword = async(password, userPassword) => {
    try {
        const passwordIsCorrect = await bcrypt.compare(password, userPassword);
        if (!passwordIsCorrect) {
            throw Error("Password doesn't match");
        }
    } catch (err) {
        throw err;
    }
};

module.exports = {
    checkPassword
}