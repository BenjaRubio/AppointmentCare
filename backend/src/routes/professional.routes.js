const express = require('express');
const router = express.Router();

const {
    getProfessional,
    createAvailableDate
} = require('../controllers/professional.controller')

router.get('/:professional_id', getProfessional);

router.post('/availableDate', createAvailableDate);

module.exports = router;