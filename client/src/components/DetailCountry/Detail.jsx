/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
//* Libraries Import
import { useEffect, useState } from "react"
import axios from "axios"
//* CSS import
import style from "./Detail.module.css"


const Detail = ({id, onClose}) => {
    const [country, setCountry] = useState("")
    const [activities, setActivities] = useState("")

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
        <img className={style.background} src={country.background}></img>
        <a onClick={handleClose} className={style.close}>X</a>
        <h3 className={style.text}>Name: {country.name}</h3>
        <h3 className={style.text}>Continent: {country.continent}</h3>
        <img className={style.flag} src={country.flag} alt='' />
        <h3 className={style.text}>Capital: {country.capital}</h3>
        <h3 className={style.text}>Subregion: {country.subregion}</h3>
        <h3 className={style.text}>Area: {country.area} (Km²)</h3>
        <h3 className={style.text}>Population: {country.population}</h3>
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