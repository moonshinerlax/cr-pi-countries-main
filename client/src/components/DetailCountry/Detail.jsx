/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
import axios from "axios"
import style from "./Detail.module.css"


const Detail = ({id, onClose}) => {
    const [country, setCountry] = useState("")
    const [activities, setActivities] = useState("")
    // const {id} = useParams()

useEffect(()=>{
    axios(`http://localhost:3001/countries/${id}`)
    .then(({data})=>{
        setCountry(data)
        setActivities(data.Activities)
    })
    setCountry({})
    setActivities([])
    }, [id])

    const handleClose = ()=>{
        onClose()
    }

  return (
    <div>
        <div className={style.modalContent}>
        <a onClick={handleClose} className={style.close}>X</a>
        <h3 >Name: {country.name}</h3>
        <h3 >Continent: {country.continent}</h3>
        <img className={style.flag} src={country.flag} alt='' />
        <h3>Capital: {country.capital}</h3>
        <h3>Subregion: {country.subregion}</h3>
        <h3>Area: {country.area} (Km²)</h3>
        <h3>Population: {country.population}</h3>
            <div className={style.activitiesContainer}>
            <h2>Activies</h2>
            {activities.length === 0 ? <><h2>No Activies have been uploaded</h2></> 
            :activities.map((activity)=>
                <div className={style.actContent} key={activity.id}>
                <h3>Activity: { activity.name }</h3>
                <h3>Difficulty: { activity.difficulty }</h3>
                <h3>Duration: { activity.duration }</h3>
                <h3>Season: { activity.season }</h3>
                <h3>{ activity.countries }</h3>
                </div>           
            )}
            </div>
        </div>
        </div>
        )}

export default Detail