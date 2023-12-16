const { Professional } = require('../models/index');
const { 
    desgloseTimeRange,
    // create: createAvailableDate
} = require('./availableDate.service');

const readById = async(professionalId) => {
    const professional = await Professional.findByPk(professionalId);
    if (!professional) {
        throw new Error('Professional not found');
    }
    professional.password = '';
    return professional;
};

const readByEmail = async(email) => {
    const professional = await Professional.findOne({
        where: {
            email: email
        }
    });
    if (!professional) {
        throw new Error('Professional not found');
    }
    return professional;
};

const checkRegistration = async(email) => {
    const professional = await Professional.findOne({
        where: {
            email: email
        }
    });
    if (professional) {
        throw new Error('Professional already exists');
    }
};

const create = async(data) => {
    const professional = await Professional.build(data);
    await professional.save();
    return professional;
};

const createAvailableDateByProfessional = async(data) => {
    const professional = await Professional.findByPk(data.professionalId);
    if (!professional) {
        throw new Error('Professional not found');
    }
    const timeRangeBlocks = desgloseTimeRange(data.timeRange);
    timeRangeBlocks.forEach(async(block) => {
        await professional.createAvailableDate({
            day: data.day,
            block: block
        });
    });
};

module.exports = {
    readById,
    readByEmail,
    checkRegistration,
    create,
    createAvailableDateByProfessional
}