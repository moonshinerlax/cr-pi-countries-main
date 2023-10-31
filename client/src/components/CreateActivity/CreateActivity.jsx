import { useState } from 'react'
import validateActivityData from './validateActivityData'
import axios from 'axios'
import style from "./activities.module.css"

const CreateActivity = () => {
    const [countries, setCountries] = useState([])
    const [countryInput, setCountryInput] = useState("")
    const [activityData, setActivityData] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: []
    })
    const [errors, setErrors] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        countries:"",
    })


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if(!activityData.name || !activityData.difficulty||!activityData.duration||!activityData.season||!activityData.countries){
                throw new Error("Please fill the missing fields")
            }
          const response = await axios.post('http://localhost:3001/activities', activityData);
          window.alert(response);
        } catch (error) {
          console.log(error);
        }
      };

    const handleOnChange = (event)=>{
        const property = event.target.name;
        const value = event.target.value;
        setActivityData({ ...activityData, [property]: value });
        validateActivityData({...activityData, [property]: value }, errors, setErrors);
    }

    const handleCountryChange = (event) => {
        const newCountry = event.target.value;
        setCountryInput(newCountry);
        validateActivityData({...activityData, countries: newCountry }, errors, setErrors);
      };

      const handleAddCountry = () => {
        if (countryInput.trim() !== '' && !countries.includes(countryInput)) { 
            setActivityData({ ...activityData, countries: [...countries, countryInput] })
            setCountries([...countries, countryInput]);
            console.log(activityData)
        }
      };

      const handleDelete = (event) => {
        const value = event.target.id;
        const updatedCountries = countries.filter((country) => country !== value);
        setActivityData({ ...activityData, countries: updatedCountries })
        setCountries(updatedCountries);
        console.log(activityData)
      }
    
  return (
    <form className={style.formContainer} onSubmit={handleSubmit}>
                <h1 className={style.title}>Activity Creation</h1>
            <div className={style.labelContainer}>
                <label className={style.label} htmlFor='name'>Activity Name</label>
                <input className={style.input} type='text' name='name' value={activityData.name} onChange={handleOnChange}></input>
                <span className={style.error} >{errors.name}</span>
            
                <label className={style.label} htmlFor='difficulty'>Assign difficulty</label>
                <input className={style.input} type='number'  min="0" max="5" name='difficulty' value={activityData.difficulty} onChange={handleOnChange}></input>
                <span className={style.error}>{errors.difficulty}</span>
            
                <label className={style.label} htmlFor='duration'>Duration</label>
                <input className={style.input} type='time'  name='duration' value={activityData.duration} onChange={handleOnChange}></input>
                <span className={style.error}>{errors.duration}</span>
            
                <label className={style.label} htmlFor='season'>Season</label>
                    <select className={style.input} value={activityData.season} name="season" onChange={handleOnChange} >
                        <option value="">Select a season</option>
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Fall">Fall</option>
                        <option value="Winter">Winter</option>
                    </select>
                <span className={style.error}>{errors.season}</span>
                     
                    <label className={style.label} htmlFor='countries'>Country</label>
                        <input 
                        className={style.input}  
                        type="text"
                        name="countries"
                        onChange={handleCountryChange}
                        placeholder="Add Country">
                        </input>
                    <button type="button" onClick={handleAddCountry}>Add Country</button>
                    <span className={style.error}>{ errors.countries }</span>               
            </div>
            <div>
                    <ul className={style.listCon}>
                    {countries.map((country, index) => (
                        <li className={style.list} key={index}>{country} <img className={style.delete} id={country} cursor="pointer" onClick={handleDelete} src='\src\images\48785_delete_document_error_remove_icon.png' /></li> 
                    ))}
                    </ul>
            </div>
            <div>
            <button type="submit" >Create</button>
            </div>
        </form>
  )
}

export default CreateActivity