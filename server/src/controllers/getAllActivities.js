const {Activity} = require ("../db")

const getAllActivities = async () => {
        const Activities = await Activity.findAll()
        return Activities
}

module.exports = getAllActivities;