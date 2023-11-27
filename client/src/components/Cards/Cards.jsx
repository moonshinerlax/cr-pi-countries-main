/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
//* Libraries Import
// import { useState } from 'react'
//* Component Imports
import { useEffect, useState } from 'react'
import Card from '../Card/card'
import PopOutWindow from '../PopOutWindow/PopOutWindow'
//* CSS Imports
import style from "./Cards.module.css"
import { Link } from 'react-router-dom'

const Cards = ({countries, onClear}) => {
  
  // const [detailid, setDetailid] = useState("")
  const [popOutWindow, setPopOutWindow] = useState(false)

  useEffect(() => {
    if (countries.length === 0) {
      setPopOutWindow(true);
    } else {
      setPopOutWindow(false);
    }
  }, [countries]);

  const closePopOut = () => {
    setPopOutWindow(false);
    onClear()
  };

  const popMessage = "Country Not Found"

  // const handleStatus = ()=>{
  //   setStatus(true)
  // }
  // const onClose = ()=>{
  //   setStatus(false)
  // }

  return (
    <div className={style.box}>
    <div className={style.container}>
        {countries.length === 0 ? 
            (<div>
            <h1>Country Not Found</h1>
            <PopOutWindow
            isOpen={popOutWindow}
            onClose={closePopOut}
            message={popMessage}
            />
            </div>)
          :
        (countries.map((country) =>
            <Link to={`/countries/${country.id}`} key={country.id}> 
            <Card
            id={country.id}
            key={country.id}
            name={country.name}
            continent={country.continent}
            flag={country.flag}/>
            </Link>))}
            
    </div>
    
      {/* <div className={`${style.detail} ${status ? style.open : ''}`}>
        {status && (
          <Detail
            id={detailid}
            onClose={onClose}
          />
        )}
      </div> */}
  </div>
  )
}

export default Cards