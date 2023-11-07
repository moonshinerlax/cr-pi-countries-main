const { Router } = require("express");
const getCountryById = require("../controllers/getCountryById");
const getAllCountries = require("../controllers/getAllCountries");
const getCountryByName = require("../controllers/getCountryByName");
const postActivity = require("../controllers/postActivity");
const getAllActivities = require("../controllers/getAllActivities");

const router = Router();



router.get("/countries", async(req, res)=>{
    const {page} = req.query
    try {
        const countries = await getAllCountries(page)
        res.status(200).json(countries)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.get("/countries/name", async (req, res)=>{
    try {
        const {name} = req.query
        const foundCountry = await getCountryByName(name)
        res.status(200).json(foundCountry)   
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


router.get("/countries/:idPais", async(req, res)=>{
    try {
        const {idPais} = req.params;
        
    const country = await getCountryById(idPais)
    res.status(200).json(country)    
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.post("/activities", async (req, res)=>{
    try {
        const {name, difficulty, duration, season, countries} = req.body;
        const newActivity = await postActivity(name, difficulty, duration, season, countries)
        res.status(200).json(newActivity)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.get("/activities", async (req, res)=>{
    try {
        const activities = await getAllActivities()
        res.status(200).json(activities)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router;
