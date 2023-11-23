const fetchAPIData = require("../helpers/fetchAPIData")
const {Country} = require("../db")

const fillDB = async () =>{
    try {
        const data = await fetchAPIData()

        for(const count of data){
            const capital = count.capital && count.capital[0] ? count.capital[0] : null;

            await Country.create({
                id: count.cca3,
                name: count.name.common,
                flag:count.flags.png,
                continent:count.continents[0],
                capital:capital,
                subregion:count.subregion,
                area:count.area,
                population: count.population,
                background: count.coatOfArms.png
            })
        }
        console.log("database fill sucessfully")
    } catch (error) {
        console.log({error: error})
    }
}

module.exports = fillDB;