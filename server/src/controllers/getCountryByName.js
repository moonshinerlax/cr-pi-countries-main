const {Country} = require("../db")
const {Op} = require("sequelize")

const getCountryByName = async (name)=>{
    
  const foundCountry = await Country.findAll({
        where: {
          name: 
          {
            [Op.iLike]: `%${name}%`
          }
        }
      });
      if(!foundCountry){
        throw new Error("Country does not exist")
    } else
    
    return foundCountry
      }

module.exports = getCountryByName;