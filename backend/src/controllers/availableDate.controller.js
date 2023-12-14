const {
    readAllAvailableDates,
    readAvailableDatesByProfessional
} = require('../services/availableDate.service');

const getAvailableDatesByProfessional = async(req, res) => {
    try {
        const professionalId = req.params.professional_id;
        const availableDates = await readAvailableDatesByProfessional(professionalId);
        res.status(200).send({
            message: "Available dates sent successfully",
            availableDates
        });
    } catch (err) {
        console.error(err.message);
        res.send(400).send({ message: err.message });
    }
};

const getAllAvailableDates = async(req, res) => {
    try {
        const availableDates = await readAllAvailableDates();
        res.status(200).send({
            message: "Available dates sent successfully",
            availableDates
        });
    } catch (err) {
        console.error(err.message);
        res.send(400).send({ message: err.message });
    }
}

module.exports = {
    getAvailableDatesByProfessional,
    getAllAvailableDates
}