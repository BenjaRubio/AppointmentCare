const { readById } = require("../services/patient.service");
const {readByPatientId} = require("../services/appointment.service");

const getPatient = async (req, res) => {
    try {
        const patientId = req.params.patient_id;
        const patient = await readById(patientId);
        res.status(200).send({
            message: "Patient sent successfully",
            patient
        });
    } catch (err) {
        console.error(err.message);
        res.status(400).send({ message: err.message });
    }
};

const getPatientAppointments = async (req, res) => {
    try {
        const patientId = req.params.patient_id;
        const appointments = await readByPatientId(patientId);
        res.status(200).send({
            message: "Appointments sent successfully",
            appointments
        });
    } catch (err) {
        console.error(err.message);
        res.status(400).send({ message: err.message });
    }
};

const createAppointment = async (req, res) => {
    try {
        const { patientId, professionalId, day, block } = req.body;
    } catch (err) {
        console.error(err.message);
        res.status(400).send({ message: err.message });
    }
};

module.exports = {
    getPatient,
    getPatientAppointments,
    createAppointment
}


