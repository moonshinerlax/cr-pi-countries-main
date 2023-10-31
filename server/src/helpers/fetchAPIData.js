const axios = require("axios")

async function fetchAPIData (){
    try {
        const response = await axios.get('http://localhost:5000/countries')
        return response.data
    } catch (error) {
        return {error: error.message}
    }
}

module.exports = fetchAPIData;