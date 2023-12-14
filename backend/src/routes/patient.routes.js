const express = require('express');
const router = express.Router();
const {
    getPatient,
    getPatientAppointments,
    createAppointment
} = require('../controllers/patient.controller')

router.get('/:patient_id', getPatient);
router.get('/:patient_id/appointment', getPatientAppointments);

router.post('/appointment', createAppointment);



module.exports = router;