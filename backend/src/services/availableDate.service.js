const { blocks, blocksStartTime } = require('../utils/blocks');
const { AvailableDate, Professional } = require('../models/index');
const {getDatesByProfessional} = require('../utils/availableDatesTransformation');

const desgloseTimeRange = (timeRange) => {
    const [start, end] = timeRange.split('-');
    const startBlock = blocksStartTime[start.trim()];
    const finalBlock = blocksStartTime[end.trim()];
    const timeRangeBlocks = [];
    for (let i = startBlock; i < finalBlock; i++) {
        timeRangeBlocks.push(i);
    }
    return timeRangeBlocks;
};

const readAvailableDatesByProfessional = async(professionalId) => {
    const availableDates = await AvailableDate.findAll({
        where: {
            professionalId: professionalId
        }
    });
    const noBlockDates = availableDates.map((availableDate) => {
        let av = availableDate.dataValues;
        return {
            ...av,
            block: blocks[av.block]
        }
    });
    return noBlockDates;
};

const readAllAvailableDates = async() => {
    const availableDates = await AvailableDate.findAll({
        include: [
            {
                model: Professional,
                as: 'Professional',
                attributes: ['id', 'name', 'lastname', 'email', 'specialty']
            }
        ],
        group: ['AvailableDate.id', 'Professional.id', 'day', 'block']
    });
    const noBlockDates = availableDates.map((availableDate) => {
        let av = availableDate.dataValues;
        return {
            ...av,
            block: blocks[av.block]
        }
    });
    const orderedDates = getDatesByProfessional(noBlockDates);
    return orderedDates;
};

module.exports = {
    desgloseTimeRange,
    readAvailableDatesByProfessional,
    readAllAvailableDates
}