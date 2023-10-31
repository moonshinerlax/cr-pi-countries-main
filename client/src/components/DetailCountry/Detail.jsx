import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"



const Detail = () => {
    const [country, setCountry] = useState("")
    const [activities, setActivities] = useState("")
    const {id} = useParams()

useEffect(()=>{
    axios(`http://localhost:3001/countries/${id}`)
    .then(({data})=>{
        setCountry(data)
        setActivities(data.Activities)
    })
    setCountry({})
    setActivities([])
    }, [id])

  return (
    <div >
        <h2 >Name: {country.name}</h2>
        <h2 >Continent: {country.continent}</h2>
        <img  src={country.flag} alt='' />
        <h2>Capital: {country.capital}</h2>
        <h2>Subregion: {country.subregion}</h2>
        <h2>Area: {country.area} (Km²)</h2>
        <h2>Population: {country.population}</h2>
        
        
        <div>
            {activities.length === 0 ? <><h2>No Activies have been uploaded</h2></> 
            :activities.map((activity)=>
                <>
                <h2>{ activity.name }</h2>
                <h2>{ activity.difficulty }</h2>
                <h2>{ activity.duration }</h2>
                <h2>{ activity.season }</h2>
                <h2>{ activity.countries }</h2>
                </>           
            )}
        </div>
    </div>
  )
}

export default Detail