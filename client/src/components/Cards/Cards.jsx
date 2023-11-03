/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
//* Component Imports
import { useState } from 'react'
import Card from '../Card/card'
//* CSS Imports
import style from "./Cards.module.css"
import Detail from '../DetailCountry/Detail'

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