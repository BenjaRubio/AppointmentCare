
const { Appointment } = require('../models/index');

const readByPatientId = async (patientId) => {
    const appointments = await Appointment.findAll({
        where: {
            patientId: patientId
        },
        include: [
            {
                association: 'professional',
                attributes: ['id', 'name', 'lastname', 'email', 'specialty']
            }
        ]
    });
    return appointments;
};


module.exports = {
    readByPatientId
}


