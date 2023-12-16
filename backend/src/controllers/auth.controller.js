const bcrypt = require('bcrypt');
const {
    checkPassword
} = require('../services/auth.service')
const {
    readByEmail: readProfessionalByEmail,
    checkRegistration: checkProfessionalRegistration,
    create: createProfessional
} = require('../services/professional.service');
const {
    readByEmail: readPatientByEmail,
    checkRegistration: checkPatientRegistration,
    create: createPatient
} = require('../services/patient.service');

const login = async(req, res) => {
    try {
        const { email, password, role} = req.body;
        let user;
        if (role === 'patient') {
            user = await readPatientByEmail(email);
        } else if (role === 'professional') {
            user = await readProfessionalByEmail(email);
        }

        await checkPassword(password, user.password);
        user.password = '';
        res.status(200).send({
            message: "Login successful",
            user: user
        })
    } catch (err) {
        console.error("Login error: ", err.message);
        res.status(401).send({ message: err.message });
    }
};

const register = async(req, res) => {
    try {
        const { name, lastname, email, password, role, specialty} = req.body;
        const userData = {
            name: name,
            lastname: lastname,
            email: email,
            password: await bcrypt.hash(String(password), 10),
            role: role
        };

        let user;
        if (role === 'patient') {
            await checkPatientRegistration(email);
            user = await createPatient(userData)
        } else if (role === 'professional') {
            await checkProfessionalRegistration(email);
            user = await createProfessional({
                ...userData,
                specialty
            })
        }
        user.password = '';
        res.status(200).send({
            message: `User created successfully`,
            user: user
        });

    } catch (err) {
        console.error(err.message);
        res.status(401).send({ message: err.message });
    }
};

module.exports = {
    login,
    register
}