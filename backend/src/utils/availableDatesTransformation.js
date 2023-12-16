
const getDatesByProfessional = (availableDates) => {
    try {
        const datesByProfessional = availableDates.reduce((acc, curr) => {
            const professionalId = curr.Professional.id;
            if (!acc[professionalId]) {
                acc[professionalId] = [];
            }
            acc[professionalId].push(curr);
            return acc;
        }, {});
        return datesByProfessional;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
}

module.exports = {
    getDatesByProfessional
}