/* eslint-disable react-hooks/exhaustive-deps */
//*Libraries Import
import { useEffect, useState } from 'react'
import axios from 'axios'
//* C Import
import style from "./activities.module.css"
//* Component Import
import validateActivityData from './validateActivityData'
import PopOutWindow from '../PopOutWindow/PopOutWindow'

const CreateActivity = () => {
    const [transition, setTransition] = useState(false)
    const [popOutWindow, setPopOutWindow] = useState(false);
    const [popMessage, setPopMessage] = useState('')
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

    useEffect(() => {
        setTimeout(()=>{
            setTransition(true)
        },0)
        validateActivityData({ ...activityData, countries: countries }, errors, setErrors);
            return ()=>{
                setTransition(false)
                
                
            }
    }, [countries]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if(!activityData.name || !activityData.difficulty||!activityData.duration||!activityData.season||activityData.countries.length === 0){
                throw new Error("Please fill the missing fields!")
            }
            if (/\d/.test(activityData.name)){
                throw new Error("Choose a valid name!")
            }
          const response = await axios.post('http://localhost:3001/activities', activityData);
          setPopMessage(`Activity ${response.data.name} has been added sucessfully!`);
          openPopOut()
        } catch (error) {
          setPopMessage(error.message);
          openPopOut()
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
      };

      const handleAddCountry = () => {
        if (countryInput.trim() !== '' && !countries.includes(countryInput)) { 
            setActivityData({ ...activityData, countries: [...countries, countryInput] })
            setCountries([...countries, countryInput]);
            setCountryInput("")
            
        } else{validateActivityData({...activityData, countries: countries }, errors, setErrors);}
    };

      const handleDelete = (event) => {
        const value = event.target.id;
        const updatedCountries = countries.filter((country) => country !== value);
        setActivityData({ ...activityData, countries: updatedCountries })
        setCountries(updatedCountries);
        
      }

      const openPopOut = () => {
        setPopOutWindow(true);
      };

      const closePopOut = () => {
        setPopOutWindow(false);
      };
    
  return (
    <form className={`${style.formContainer} ${transition ? style.slideIn : style.slideOut}`} onSubmit={handleSubmit}>
                <h1 className={style.title}>Activity Creation</h1>
            <div className={style.labelContainer}>
                <label className={style.label} htmlFor='name'>Activity Name</label>
                <input className={style.input} type='text' name='name' value={activityData.name} onChange={handleOnChange}></input>
                <span className={style.error} >{errors.name}</span>
            
                <label className={style.label} htmlFor='difficulty'>Assign difficulty</label>
                <input className={style.input} type='number'  min="1" max="5" name='difficulty' value={activityData.difficulty} onChange={handleOnChange}></input>
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
                        value={countryInput}  
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
            <div>
                <PopOutWindow
                    isOpen={popOutWindow}
                    onClose={closePopOut}
                    message={popMessage}
                />
            </div>
        </form>
  )
}

export default CreateActivity