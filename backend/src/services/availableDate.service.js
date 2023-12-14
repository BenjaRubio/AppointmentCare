const { blocks, blocksStartTime } = require('../utils/blocks');
const { AvailableDate } = require('../models/index');

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
        return {
            ...availableDate,
            block: blocks[availableDate.block]
        }
    });
    return noBlockDates;
};

const readAllAvailableDates = async() => {
    const availableDates = await AvailableDate.findAll({
        include: [
            {
                association: 'professional',
                attributes: ['id', 'name', 'lastname', 'email', 'specialty']
            }
        ],
        group: ['professionalId', 'day', 'block']
    });
    const noBlockDates = availableDates.map((availableDate) => {
        return {
            ...availableDate,
            block: blocks[availableDate.block]
        }
    });
    return noBlockDates;
};

module.exports = {
    desgloseTimeRange,
    readAvailableDatesByProfessional,
    readAllAvailableDates
}