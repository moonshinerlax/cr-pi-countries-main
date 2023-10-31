const {Country} = require ("../db")

const getAllCountries = async () => {
        const Countries = await Country.findAll()
        return Countries
}

module.exports = getAllCountries;
