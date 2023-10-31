const {Country, Activity} = require("../db")

const postActivity = async (name, difficulty, duration, season, countries)=>{
    const newActivity = await Activity.create({
        name, difficulty, duration, season
      });
    if (countries && countries.length > 0){
        const selectedCountries = await Country.findAll({
            where: {
                name: countries
            }
        })
        await newActivity.setCountries(selectedCountries)
        return newActivity
    } else {
        throw new Error("Please select at least one Country")
    }

}

module.exports = postActivity;