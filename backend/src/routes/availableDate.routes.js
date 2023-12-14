const express = require('express');
const router = express.Router();
const {
    getAllAvailableDates,
    getAvailableDatesByProfessional
} = require('../controllers/availableDate.controller')

router.get('/', getAllAvailableDates);
router.get('/:professional_id', getAvailableDatesByProfessional);



module.exports = router;