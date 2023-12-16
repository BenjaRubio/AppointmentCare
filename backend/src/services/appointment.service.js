
const { Appointment, Professional } = require('../models/index');

const readByPatientId = async (patientId) => {
    const appointments = await Appointment.findAll({
        where: {
            patientId: patientId
        },
        include: [
            {
                model: Professional,
                as: 'Professional',
                attributes: ['id', 'name', 'lastname', 'email', 'specialty']
            }
        ]
    });
    return appointments;
};

const create = async (appointment) => {
    const createdAppointment = await Appointment.build(appointment);
    await createdAppointment.save();
    return createdAppointment;
}


module.exports = {
    readByPatientId,
    create
}


