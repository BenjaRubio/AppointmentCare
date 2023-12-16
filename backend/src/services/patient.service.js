const { Patient } = require('../models/index');

const readById = async(patientId) => {
    const patient = await Patient.findByPk(patientId);
    if (!patient) {
        throw new Error('Patient not found');
    }
    patient.password = '';
    return patient;
};

const readByEmail = async(email) => {
    const patient = await Patient.findOne({
        where: {
            email: email
        }
    });
    if (!patient) {
        throw new Error('Patient not found');
    }
    return patient;
};

const checkRegistration = async(email) => {
    const patient = await Patient.findOne({
        where: {
            email: email
        }
    });
    if (patient) {
        throw new Error('Patient already exists');
    }
};

const create = async(data) => {
    const patient = await Patient.build(data);
    await patient.save();
    return patient;
};

/*



*/

module.exports = {
    readById,
    readByEmail,
    checkRegistration,
    create
}