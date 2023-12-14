const {
    readById,
    createAvailableDateByProfessional
} = require('../services/professional.service');

const getProfessional = async(req, res) => {
    try {
        const professionalId = req.params.professional_id;
        const professional = await readById(professionalId);
        res.status(200).send({
            message: "Professional sent successfully",
            professional
        });
    } catch (err) {
        console.error(err.message);
        res.status(400).send({ message: err.message });
    }
};

const createAvailableDate = async(req, res) => {
    try {
        const { professionalId, day, timeRange } = req.body;
        await createAvailableDateByProfessional({
            professionalId,
            day,
            timeRange
        });
        res.status(200).send({
            message: "Available date created successfully",
            professional
        });
    } catch (err) {}
}

module.exports = {
    getProfessional,
    createAvailableDate
};