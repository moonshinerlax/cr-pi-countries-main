const {Country, Activity} = require ("../db")

const getCountryById = async (idPais) => {
        const id = idPais.toUpperCase()
        const foundCountry = await Country.findByPk(id, {
            include: Activity
        })
        if(!foundCountry){
            throw new Error("Country does not exist")
        } else
        return foundCountry  
}

module.exports = getCountryById;

