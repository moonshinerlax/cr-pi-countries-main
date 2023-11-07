/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
//* Libraries Import
import { useState } from 'react'
//* Component Imports
import Card from '../Card/card'
import Detail from '../DetailCountry/Detail'
//* CSS Imports
import style from "./Cards.module.css"

const Cards = ({countries}) => {
  
  const [detailid, setDetailid] = useState("")
  const [status, setStatus] = useState(false)
   

  const handleDetail = (data) =>{
    setDetailid(data)
  }

  const handleStatus = ()=>{
    setStatus(true)
  }
  const onClose = ()=>{
    setStatus(false)
  }

  return (
    <div>
    <div className={style.container}>
        {countries.map((country) => 
            <Card
            status={handleStatus}
            detailID={handleDetail}
            id={country.id}
            key={country.id}
            name={country.name}
            continent={country.continent}
            flag={country.flag}/>
            )}
    </div>
    
      <div className={`${style.detail} ${status ? style.open : ''}`}>
        {status && (
          <Detail
            id={detailid}
            onClose={onClose}
          />
        )}
      </div>
  </div>
  )
}

export default Cards